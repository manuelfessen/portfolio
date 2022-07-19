import path from "path";
import { promises as fs } from "fs";
import { globby } from "globby";
import grayMatter from "gray-matter";

(async function () {
  // prepare the dirs
  const srcDir = path.join(process.cwd(), "src");
  const publicDir = path.join(process.cwd(), "public");
  const contentDir = path.join(srcDir, "notes", "blog", "about");
  const contentFilePattern = path.join(contentDir, "*.md");
  const indexFile = path.join(publicDir, "search-index.json");
  const getSlugFromPathname = (pathname) =>
    path.basename(pathname, path.extname(pathname));

  const contentFilePaths = await globby([contentFilePattern]);

  if (contentFilePaths.length) {
    const files = contentFilePaths.map(
      async (filePath) => await fs.readFile(filePath, "utf8")
    );
    const index = [];
    let i = 0;
    for await (let file of files) {
      const {
        data: { title, description },
        content,
      } = grayMatter(file);
      index.push({
        slug: getSlugFromPathname(contentFilePaths[i]),
        category: "blog",
        title,
        description,
        body: content,
      });
      i++;
    }
    await fs.writeFile(indexFile, JSON.stringify(index));
    console.log(
      `Indexed ${index.length} documents from ${contentDir} to ${indexFile}`
    );
  }
})();

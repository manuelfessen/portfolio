import { getCollection } from 'astro:content';
import { SITE } from 'portfolio:config';

const pages = await getCollection('pages');
const posts = await getCollection('blog');

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE.origin}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${SITE.origin}/${page.slug}</loc>
    <lastmod>${page.data.updatedDate?.toISOString() || new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
  </url>`
    )
    .join('')}
  ${posts
    .map(
      (post) => `
  <url>
    <loc>${SITE.origin}/blog/${post.slug}</loc>
    <lastmod>${post.data.updatedDate?.toISOString() || new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

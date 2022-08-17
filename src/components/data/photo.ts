export class PhotoSource {
  public compressed: string;
  public original: string;
}

export class Photo {
  public id: string;
  public src: PhotoSource;
  public alt?: string;
  public title?: string;
  public description?: string;
  public location?: string;
  public date?: Date;
  public isFavorite?: boolean;
  public category?: string;
}

export const photos: Photo[] = [
  {
    id: "raggi-del-pianeta",
    alt: "Golden sunset over a snowy mountain",
    src: {
      compressed:
        "https://badger.blob.core.windows.net/photos/raggi-del-pianeta-preview.jpg",
      original:
        "https://badger.blob.core.windows.net/photos/raggi-del-pianeta.jpg",
    },
    title: "Raggi del Pianeta",
    location: "North Cascades National Park",
    date: new Date("2022-01-09"),
    isFavorite: true,
    category: "design-update",
  },
  {
    id: "new-horizons",
    alt: "Boat sailing in front of sunset over the Olympic Mountains",
    src: {
      compressed:
        "https://badger.blob.core.windows.net/photos/new-horizons-preview.jpg",
      original: "https://badger.blob.core.windows.net/photos/new-horizons.jpg",
    },
    title: "New Horizons",
    location: "Golden Gardens Park",
    date: new Date("2021-09-24"),
    isFavorite: true,
    category: "design-update",
  },
  {
    id: "riveder-le-stelle",
    alt: "Glimpse of the Milky Way hovering over the Cascades",
    src: {
      compressed:
        "https://badger.blob.core.windows.net/photos/riveder-le-stelle-preview.jpg",
      original:
        "https://badger.blob.core.windows.net/photos/riveder-le-stelle.jpg",
    },
    title: "Riveder le Stelle",
    location: "North Cascades National Park",
    date: new Date("2021-09-03"),
    isFavorite: true,
    category: "design-update",
  },
  {
    id: "mio-gatto",
    alt: "Orange and white cat",
    src: {
      compressed:
        "https://badger.blob.core.windows.net/photos/mio-gatto-preview.jpg",
      original: "https://badger.blob.core.windows.net/photos/mio-gatto.jpg",
    },
    title: "Mio Gatto",
    location: "Under the Table",
    date: new Date("2015-03-02"),
    isFavorite: true,
    category: "design-update",
  },
];
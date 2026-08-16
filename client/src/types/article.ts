export interface Article {
  _id: string;
  title: string;
  subtitle: string;
  image: string;
  publishDate: string;
  publication: string;
  category: string;
  tag: string;
  url: string;
}

export interface FilterOptions {
  categories: string[];
  tags: string[];
  publications: string[];
}

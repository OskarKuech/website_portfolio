import { Article, FilterOptions } from "../types/article";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export interface ArticleQuery {
  category?: string;
  tag?: string;
  publication?: string;
}

export async function fetchArticles(query: ArticleQuery = {}): Promise<Article[]> {
  const params = new URLSearchParams();
  if (query.category && query.category !== "All") params.set("category", query.category);
  if (query.tag && query.tag !== "All") params.set("tag", query.tag);
  if (query.publication && query.publication !== "All") params.set("publication", query.publication);

  const res = await fetch(`${API_URL}/articles?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to load articles");
  return res.json();
}

export async function fetchFilterOptions(): Promise<FilterOptions> {
  const res = await fetch(`${API_URL}/articles/filters`);
  if (!res.ok) throw new Error("Failed to load filters");
  return res.json();
}

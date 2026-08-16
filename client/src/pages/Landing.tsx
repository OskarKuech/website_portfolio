import { useEffect, useState, useCallback } from "react";
import { Article, FilterOptions } from "../types/article";
import { fetchArticles, fetchFilterOptions } from "../api/articles";
import FilterBar from "../components/FilterBar";
import ArticleCard from "../components/ArticleCard";

const emptyOptions: FilterOptions = { categories: [], tags: [], publications: [] };

export default function Landing() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [options, setOptions] = useState<FilterOptions>(emptyOptions);
  const [category, setCategory] = useState("All");
  const [tag, setTag] = useState("All");
  const [publication, setPublication] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFilterOptions()
      .then(setOptions)
      .catch(() => setOptions(emptyOptions));
  }, []);

  const loadArticles = useCallback(() => {
    setLoading(true);
    setError(null);
    fetchArticles({ category, tag, publication })
      .then(setArticles)
      .catch(() => setError("Couldn't load articles. Check that the server is running."))
      .finally(() => setLoading(false));
  }, [category, tag, publication]);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8">
        <FilterBar
          options={options}
          category={category}
          tag={tag}
          publication={publication}
          onCategoryChange={setCategory}
          onTagChange={setTag}
          onPublicationChange={setPublication}
        />
      </div>

      {loading && <p className="text-sm text-neutral-500">Loading articles...</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}

      {!loading && !error && articles.length === 0 && (
        <p className="text-sm text-neutral-500">No articles match these filters.</p>
      )}

      {!loading && !error && articles.length > 0 && (
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

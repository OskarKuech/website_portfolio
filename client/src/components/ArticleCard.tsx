import { Article } from "../types/article";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  
  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date);
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col outline-offset-4"
    >
      <div className="aspect-[3/2] w-full overflow-hidden bg-neutral-100">
        <img
          src={article.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-wide text-neutral-500">
        <span>{formatDate(article.publishDate)}</span>
        <span aria-hidden="true">&middot;</span>
        <span>{article.publication}</span>
      </div>
      <p className="mt-1 text-sm text-neutral-600">{article.subtitle}</p>
      <h3 className="mt-2 text-lg font-semibold leading-snug text-neutral-900 group-hover:underline">
        {article.title}
      </h3>
    </a>
  );
}

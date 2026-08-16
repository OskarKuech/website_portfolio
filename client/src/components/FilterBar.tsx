import { FilterOptions } from "../types/article";

interface FilterBarProps {
  options: FilterOptions;
  category: string;
  tag: string;
  publication: string;
  onCategoryChange: (value: string) => void;
  onTagChange: (value: string) => void;
  onPublicationChange: (value: string) => void;
}

function Select({
  label,
  value,
  values,
  onChange,
}: {
  label: string;
  value: string;
  values: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1 text-xs text-neutral-500">
      <span className="uppercase tracking-wide">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-w-[10rem] rounded-none border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-neutral-900"
      >
        <option value="All">All</option>
        {values.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function FilterBar({
  options,
  category,
  tag,
  publication,
  onCategoryChange,
  onTagChange,
  onPublicationChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-4 border-b border-neutral-200 pb-6">
      <Select label="Category" value={category} values={options.categories} onChange={onCategoryChange} />
      <Select label="Tag" value={tag} values={options.tags} onChange={onTagChange} />
      <Select label="Publication" value={publication} values={options.publications} onChange={onPublicationChange} />
    </div>
  );
}

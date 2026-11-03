import { Search, X } from 'lucide-react';
import type { Category } from '@/types/catalogue';

interface CatalogueControlsProps {
  query: string;
  onQueryChange: (query: string) => void;
  categories: Category[];
  activeCategoryId: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}

export default function CatalogueControls({
  query,
  onQueryChange,
  categories,
  activeCategoryId,
  onCategoryChange,
}: CatalogueControlsProps) {
  const chipClass = (active: boolean) =>
    `shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
      active
        ? 'border-ink bg-ink text-cream'
        : 'border-line bg-paper text-ink hover:border-gold hover:bg-gold-soft'
    }`;

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search tees, prints, collars"
          aria-label="Search products"
          className="w-full rounded-full border border-line bg-paper py-3 pl-11 pr-11 text-sm text-ink placeholder:text-ink-muted/80 shadow-sm transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange('')}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-ink-muted transition hover:bg-line/60 hover:text-ink"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <button type="button" className={chipClass(activeCategoryId === null)} onClick={() => onCategoryChange(null)}>
          All tees
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={chipClass(activeCategoryId === category.id)}
            onClick={() => onCategoryChange(category.id)}
            aria-pressed={activeCategoryId === category.id}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}

import ProductCard from '@/components/ProductCard';
import type { Category, Product } from '@/types/catalogue';

interface ProductGridProps {
  products: Product[];
  categories: Category[];
  onSelect: (productId: string) => void;
  onReset: () => void;
}

export default function ProductGrid({ products, categories, onSelect, onReset }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-gold/60 bg-paper/70 px-6 py-16 text-center">
        <p className="font-display text-xl font-semibold text-ink">No tees match your search</p>
        <p className="mt-2 text-sm text-ink-muted">Try a different word or clear the filters.</p>
        <button
          type="button"
          onClick={onReset}
          className="mt-6 rounded-full bg-maroon px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-maroon-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          Show all tees
        </button>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} categories={categories} onSelect={onSelect} />
        </li>
      ))}
    </ul>
  );
}

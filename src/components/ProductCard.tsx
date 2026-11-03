import { COMBO_OFFERS } from '@/config/comboOffers';
import type { Category, Product } from '@/types/catalogue';
import { formatPrice } from '@/lib/format';

interface ProductCardProps {
  product: Product;
  categories: Category[];
  onSelect: (productId: string) => void;
}

export default function ProductCard({ product, categories, onSelect }: ProductCardProps) {
  const primaryCategory = categories.find((category) => category.id === product.categoryIds[0]);
  const hasCombo = product.categoryIds.some((id) => COMBO_OFFERS.some((offer) => offer.categoryId === id));

  return (
    <button
      type="button"
      onClick={() => onSelect(product.id)}
      className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line/80 bg-paper text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gold-soft">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          decoding="async"
          width={940}
          height={1175}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {hasCombo && (
          <span className="absolute left-3 top-3 rounded-full bg-ember px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow">
            Combo
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        {primaryCategory && (
          <p className="text-[11px] font-medium uppercase tracking-wider text-gold-deep">{primaryCategory.label}</p>
        )}
        <h3 className="font-display text-base font-semibold leading-snug text-ink sm:text-lg">{product.name}</h3>
        <div className="mt-auto pt-2">
          <p className="text-base font-semibold text-ink">{product.price ? formatPrice(product.price) : 'Contact for Price'}</p>
          <p className="text-[11px] font-medium text-gold-deep">Single Piece</p>
        </div>
      </div>
    </button>
  );
}

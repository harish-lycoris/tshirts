import { useEffect, useState } from 'react';
import { Check, ShoppingBag } from 'lucide-react';
import { COMBO_OFFERS } from '@/config/comboOffers';
import { STORE } from '@/config/store';
import QuantityStepper from '@/components/QuantityStepper';
import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/lib/format';
import type { Category, Product } from '@/types/catalogue';

interface ProductDetailProps {
  product: Product;
  categories: Category[];
}

export default function ProductDetail({ product, categories }: ProductDetailProps) {
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    if (!justAdded) return;
    const timer = window.setTimeout(() => setJustAdded(false), 2000);
    return () => window.clearTimeout(timer);
  }, [justAdded]);

  const categoryLabels = product.categoryIds.map(
    (id) => categories.find((category) => category.id === id)?.label ?? id,
  );
  const comboOffers = COMBO_OFFERS.filter((offer) => product.categoryIds.includes(offer.categoryId));

  const handleAdd = () => {
    if (!size) return;
    addItem(product.id, size, quantity);
    setJustAdded(true);
  };

  return (
    <div className="grid gap-6 p-4 pt-14 sm:p-6 sm:pt-16 md:grid-cols-2 md:gap-10 md:p-8 md:pt-16">
      <div className="space-y-3">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gold-soft">
          <img
            src={product.images[activeImage]}
            alt={`${product.name} photo ${activeImage + 1}`}
            width={940}
            height={1175}
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        {product.images.length > 1 && (
          <div className="grid grid-cols-4 gap-2" role="group" aria-label="Product photos">
            {product.images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-pressed={activeImage === index}
                aria-label={`Show photo ${index + 1}`}
                className={`aspect-[4/5] overflow-hidden rounded-xl border-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  activeImage === index ? 'border-maroon' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={image} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <div className="flex flex-wrap gap-2">
          {categoryLabels.map((label) => (
            <span key={label} className="rounded-full bg-gold-soft px-3 py-1 text-xs font-medium text-gold-deep">
              {label}
            </span>
          ))}
        </div>
        <h2 className="mt-3 text-2xl font-semibold leading-tight text-ink sm:text-3xl">{product.name}</h2>
        <p className="mt-3 text-2xl font-semibold text-ink">{formatPrice(product.price)}</p>
        <p className="mt-1 text-xs text-ink-muted">Price per piece</p>

        {comboOffers.length > 0 && (
          <div className="mt-4 rounded-2xl border border-gold/40 bg-gold-soft/60 p-3 text-sm text-ink">
            {comboOffers.map((offer) => (
              <p key={offer.categoryId}>
                Combo: {offer.quantity} for {formatPrice(offer.bundlePrice)} when you mix any{' '}
                {categories.find((category) => category.id === offer.categoryId)?.label.toLowerCase()} tees.
              </p>
            ))}
          </div>
        )}

        <p className="mt-5 text-sm leading-relaxed text-ink-muted">{product.description}</p>

        <div className="mt-6">
          <p className="text-sm font-semibold text-ink">Select size</p>
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Available sizes">
            {product.sizes.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSize(option)}
                aria-pressed={size === option}
                className={`min-w-[3.25rem] rounded-full border px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  size === option
                    ? 'border-ink bg-ink text-cream'
                    : 'border-line bg-paper text-ink hover:border-gold'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-ink">Quantity</p>
          <QuantityStepper
            label="quantity"
            value={quantity}
            max={STORE.maxQuantityPerItem}
            onChange={setQuantity}
          />
        </div>

        <div className="mt-auto pt-8">
          <button
            type="button"
            onClick={handleAdd}
            disabled={!size}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3.5 text-base font-semibold text-cream shadow-lg shadow-maroon/20 transition hover:bg-maroon-dark disabled:cursor-not-allowed disabled:bg-ink-muted disabled:shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            {justAdded ? <Check className="h-5 w-5" /> : <ShoppingBag className="h-5 w-5" />}
            {justAdded
              ? 'Added to cart'
              : size
                ? `Add to cart - ${formatPrice(product.price * quantity)}`
                : 'Select a size to continue'}
          </button>
        </div>
      </div>
    </div>
  );
}

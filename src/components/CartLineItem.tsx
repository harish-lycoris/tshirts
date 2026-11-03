import { Trash2 } from 'lucide-react';
import QuantityStepper from '@/components/QuantityStepper';
import { STORE } from '@/config/store';
import { formatPrice } from '@/lib/format';
import type { PricedLine } from '@/lib/pricing';
import type { Product } from '@/types/catalogue';

interface CartLineItemProps {
  line: PricedLine;
  product: Product;
  onChangeSize: (nextSize: string) => void;
  onChangeQuantity: (quantity: number) => void;
  onRemove: () => void;
}

export default function CartLineItem({
  line,
  product,
  onChangeSize,
  onChangeQuantity,
  onRemove,
}: CartLineItemProps) {
  return (
    <li className="flex gap-4 rounded-2xl border border-line/80 bg-paper p-3 shadow-sm">
      <div className="h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-gold-soft">
        <img
          src={product.images[0]}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <p className="font-display text-base font-semibold leading-snug text-ink">{product.name}</p>
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${product.name}`}
            className="shrink-0 rounded-full p-1.5 text-ink-muted transition hover:bg-maroon-soft hover:text-maroon focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
        <p className="text-xs text-ink-muted">{formatPrice(line.unitPrice)} each</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-2">
          <label className="flex items-center gap-2 text-xs font-medium text-ink-muted">
            Size
            <select
              value={line.size}
              onChange={(event) => onChangeSize(event.target.value)}
              className="rounded-full border border-line bg-cream px-3 py-1.5 text-sm font-medium text-ink focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
          <QuantityStepper
            label={`${product.name} quantity`}
            value={line.quantity}
            max={STORE.maxQuantityPerItem}
            onChange={onChangeQuantity}
          />
        </div>
        <p className="pt-2 text-right text-sm font-semibold text-ink">{formatPrice(line.lineTotal)}</p>
      </div>
    </li>
  );
}

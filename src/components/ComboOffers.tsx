import { Layers } from 'lucide-react';
import { COMBO_OFFERS } from '@/config/comboOffers';
import { formatPrice } from '@/lib/format';
import type { Category } from '@/types/catalogue';

interface ComboOffersProps {
  categories: Category[];
}

export default function ComboOffers({ categories }: ComboOffersProps) {
  return (
    <section aria-label="Combo offers" className="grid gap-3 sm:grid-cols-2">
      {COMBO_OFFERS.map((offer) => {
        const label = categories.find((category) => category.id === offer.categoryId)?.label ?? offer.categoryId;
        return (
          <div
            key={offer.categoryId}
            className="flex items-center gap-4 rounded-2xl border border-gold/40 bg-gradient-to-r from-gold-soft to-paper p-4 shadow-sm"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon text-marigold">
              <Layers className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wider text-gold-deep">Combo offer</p>
              <p className="font-display text-lg font-semibold leading-tight text-ink">
                {offer.quantity} {label} tees for {formatPrice(offer.bundlePrice)}
              </p>
              <p className="text-xs text-ink-muted">Mix any {label.toLowerCase()} tees to qualify</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

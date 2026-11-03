import { formatPrice } from '@/lib/format';
import type { CartTotals } from '@/lib/pricing';

interface CartSummaryProps {
  totals: CartTotals;
}

export default function CartSummary({ totals }: CartSummaryProps) {
  return (
    <div className="space-y-2 text-sm">
      <div className="flex justify-between text-ink-muted">
        <span>Subtotal ({totals.itemCount} {totals.itemCount === 1 ? 'piece' : 'pieces'})</span>
        <span className="tabular-nums">{formatPrice(totals.subtotal)}</span>
      </div>

      {totals.combos.map((combo) => (
        <div key={combo.categoryId} className="flex justify-between text-ember">
          <span>
            {combo.label} combo ({combo.quantity} for {formatPrice(combo.bundlePrice)})
            {combo.bundles > 1 ? ` x${combo.bundles}` : ''}
          </span>
          <span className="tabular-nums">-{formatPrice(combo.discount)}</span>
        </div>
      ))}

      <div className="flex items-baseline justify-between border-t border-line pt-3">
        <span className="font-semibold text-ink">Estimated total</span>
        <span className="font-display text-2xl font-semibold tabular-nums text-ink">
          {formatPrice(totals.total)}
        </span>
      </div>
    </div>
  );
}

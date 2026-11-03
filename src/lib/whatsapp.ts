import { STORE } from '@/config/store';
import { formatPrice } from '@/lib/format';
import type { CartTotals } from '@/lib/pricing';

export function buildOrderMessage(totals: CartTotals): string {
  const lines = [
    STORE.whatsappGreeting,
    '',
    'Items:',
    ...totals.lines.map(
      (line, index) =>
        `${index + 1}. ${line.name} | Size: ${line.size} | Qty: ${line.quantity} | ${formatPrice(line.lineTotal)}`,
    ),
  ];

  if (totals.combos.length > 0) {
    lines.push('', 'Combo offers applied:');
    totals.combos.forEach((combo) => {
      lines.push(
        `- ${combo.label}: ${combo.quantity} for ${formatPrice(combo.bundlePrice)} x ${combo.bundles} (saves ${formatPrice(combo.discount)})`,
      );
      lines.push(`  Items: ${combo.itemLabels.join(', ')}`);
    });
  }

  lines.push(
    '',
    `Subtotal: ${formatPrice(totals.subtotal)}`,
    `Combo savings: -${formatPrice(totals.discountTotal)}`,
    `Estimated total: ${formatPrice(totals.total)}`,
    '',
    'Please confirm final price and availability. Thank you!',
  );

  return lines.join('\n');
}

export function buildWhatsAppUrl(message: string, number: string = STORE.whatsappNumber): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

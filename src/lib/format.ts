import { STORE } from '@/config/store';

const formatter = new Intl.NumberFormat(STORE.locale, {
  style: 'currency',
  currency: STORE.currency,
  maximumFractionDigits: 0,
});

export function formatPrice(amount: number): string {
  return formatter.format(amount);
}

import type { ComboOffer } from '@/types/catalogue';

// Order matters: a product is counted toward the first matching offer only,
// so earlier offers take priority. Set an offer's categoryId to a category
// in categories.ts; any mix of products within that category qualifies.
export const COMBO_OFFERS: ComboOffer[] = [
  { categoryId: 'collar', quantity: 3, bundlePrice: 500 },
  { categoryId: 'printed', quantity: 2, bundlePrice: 699 },
];

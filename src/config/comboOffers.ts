import type { ComboOffer } from '@/types/catalogue';

export const COMBO_OFFERS: ComboOffer[] = [
  { categoryId: 'acid-naruto', label: 'Acid Wash & Naruto', quantity: 3, bundlePrice: 1000, prices: [400, 700, 1000] },
  { categoryId: 'iron-ferrari-spider', label: 'Iron Man, Ferrari & Spider-Man', quantity: 3, bundlePrice: 800, prices: [300, 550, 800] },
  { categoryId: 'collar', label: 'Collar', quantity: 3, bundlePrice: 500, prices: [200, 350, 500] },
  { categoryId: 'eagle', label: 'Eagle', quantity: 3, bundlePrice: 900, prices: [360, 680, 900] },
  { categoryId: 'porsche', label: 'Porsche', quantity: 3, bundlePrice: 700, prices: [260, 480, 700] },
];

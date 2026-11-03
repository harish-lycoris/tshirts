export interface PricingGroup {
  id: string;
  label: string;
  one: number;
  two: number;
  three: number;
  products: string[]; // product ids
}

export const PRICING_GROUPS: PricingGroup[] = [
  {
    id: 'acid-naruto',
    label: 'Acid Wash / Naruto',
    one: 400,
    two: 700,
    three: 1000,
    products: ['acidwash-printed', 'naruto'],
  },
  {
    id: 'iron-ferrari-spider',
    label: 'Iron Man / Ferrari / Spider-Man',
    one: 300,
    two: 550,
    three: 800,
    products: ['ironman', 'ferrari-tee'], // spider-man not present in images
  },
  {
    id: 'collar',
    label: 'Collar',
    one: 200,
    two: 350,
    three: 500,
    products: ['collar-polo', 'collar-polo-1', 'collar-stripe'],
  },
  {
    id: 'eagle',
    label: 'Eagle',
    one: 360,
    two: 680,
    three: 900,
    products: ['eagle-acid'],
  },
  {
    id: 'porsche',
    label: 'Porsche',
    one: 260,
    two: 480,
    three: 700,
    products: ['porsche'],
  },
];

export function getGroupForProduct(productId: string): PricingGroup | null {
  return PRICING_GROUPS.find((g) => g.products.includes(productId)) ?? null;
}

export function getComboPrice(groupId: string, quantity: number): number | null {
  const g = PRICING_GROUPS.find((x) => x.id === groupId);
  if (!g) return null;
  if (quantity === 1) return g.one;
  if (quantity === 2) return g.two;
  if (quantity >= 3) return g.three;
  return null;
}

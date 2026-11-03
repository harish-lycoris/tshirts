import type { Category, ComboOffer, CartLine, Product } from '@/types/catalogue';

export interface PricedLine {
  productId: string;
  name: string;
  size: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
}

export interface AppliedCombo {
  categoryId: string;
  label: string;
  quantity: number;
  bundlePrice: number;
  bundles: number;
  itemLabels: string[];
  discount: number;
}

export interface CartTotals {
  lines: PricedLine[];
  itemCount: number;
  subtotal: number;
  combos: AppliedCombo[];
  discountTotal: number;
  total: number;
}

interface Unit {
  label: string;
  price: number;
  categoryIds: string[];
  claimed: boolean;
}

function buildUnits(
  resolved: { line: CartLine; product: Product }[],
): Unit[] {
  return resolved.flatMap(({ line, product }) =>
    Array.from({ length: line.quantity }, () => ({
      label: `${product.name} (${line.size})`,
      price: product.price,
      categoryIds: product.categoryIds,
      claimed: false,
    })),
  );
}

// Each unit is claimed by at most one offer, so a product never earns two discounts.
// Within an offer, the most expensive eligible units are bundled first.
function applyOffer(
  units: Unit[],
  offer: ComboOffer,
  category: Category | undefined,
): AppliedCombo | null {
  const eligible = units
    .filter((unit) => !unit.claimed && unit.categoryIds.includes(offer.categoryId))
    .sort((a, b) => b.price - a.price);

  const bundles = Math.floor(eligible.length / offer.quantity);
  if (bundles === 0) return null;

  const used = eligible.slice(0, bundles * offer.quantity);
  const regularTotal = used.reduce((sum, unit) => sum + unit.price, 0);
  const discount = regularTotal - bundles * offer.bundlePrice;
  if (discount <= 0) return null;

  used.forEach((unit) => {
    unit.claimed = true;
  });

  return {
    categoryId: offer.categoryId,
    label: category?.label ?? offer.categoryId,
    quantity: offer.quantity,
    bundlePrice: offer.bundlePrice,
    bundles,
    itemLabels: used.map((unit) => unit.label),
    discount,
  };
}

export function calculateCartTotals(
  lines: CartLine[],
  products: Product[],
  categories: Category[],
  offers: ComboOffer[],
): CartTotals {
  const resolved = lines.flatMap((line) => {
    const product = products.find((item) => item.id === line.productId);
    return product ? [{ line, product }] : [];
  });

  const pricedLines: PricedLine[] = resolved.map(({ line, product }) => ({
    productId: product.id,
    name: product.name,
    size: line.size,
    quantity: line.quantity,
    unitPrice: product.price,
    lineTotal: product.price * line.quantity,
  }));

  const units = buildUnits(resolved);
  const combos = offers.flatMap((offer) => {
    const category = categories.find((item) => item.id === offer.categoryId);
    const applied = applyOffer(units, offer, category);
    return applied ? [applied] : [];
  });

  const subtotal = pricedLines.reduce((sum, line) => sum + line.lineTotal, 0);
  const discountTotal = combos.reduce((sum, combo) => sum + combo.discount, 0);

  return {
    lines: pricedLines,
    itemCount: pricedLines.reduce((sum, line) => sum + line.quantity, 0),
    subtotal,
    combos,
    discountTotal,
    total: subtotal - discountTotal,
  };
}

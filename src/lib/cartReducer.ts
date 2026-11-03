import { STORE } from '@/config/store';
import type { CartLine, Product } from '@/types/catalogue';

export type CartAction =
  | { type: 'add'; productId: string; size: string; quantity: number }
  | { type: 'setQuantity'; productId: string; size: string; quantity: number }
  | { type: 'changeSize'; productId: string; size: string; nextSize: string }
  | { type: 'remove'; productId: string; size: string };

const sameLine = (line: CartLine, productId: string, size: string) =>
  line.productId === productId && line.size === size;

const clampQuantity = (quantity: number) =>
  Math.min(Math.max(Math.round(quantity), 1), STORE.maxQuantityPerItem);

export function cartReducer(lines: CartLine[], action: CartAction): CartLine[] {
  switch (action.type) {
    case 'add': {
      const existing = lines.find((line) => sameLine(line, action.productId, action.size));
      if (!existing) {
        return [
          ...lines,
          {
            productId: action.productId,
            size: action.size,
            quantity: clampQuantity(action.quantity),
          },
        ];
      }
      return lines.map((line) =>
        line === existing
          ? { ...line, quantity: clampQuantity(line.quantity + action.quantity) }
          : line,
      );
    }
    case 'setQuantity':
      return lines.map((line) =>
        sameLine(line, action.productId, action.size)
          ? { ...line, quantity: clampQuantity(action.quantity) }
          : line,
      );
    case 'changeSize': {
      const source = lines.find((line) => sameLine(line, action.productId, action.size));
      if (!source || action.size === action.nextSize) return lines;

      const target = lines.find((line) => sameLine(line, action.productId, action.nextSize));
      if (!target) {
        return lines.map((line) =>
          line === source ? { ...line, size: action.nextSize } : line,
        );
      }

      return lines
        .filter((line) => line !== source)
        .map((line) =>
          line === target
            ? { ...line, quantity: clampQuantity(line.quantity + source.quantity) }
            : line,
        );
    }
    case 'remove':
      return lines.filter((line) => !sameLine(line, action.productId, action.size));
  }
}

export function sanitizeCartLines(raw: unknown, products: Product[]): CartLine[] {
  if (!Array.isArray(raw)) return [];

  return raw.flatMap((entry): CartLine[] => {
    if (typeof entry !== 'object' || entry === null) return [];
    const { productId, size, quantity } = entry as Record<string, unknown>;

    const product = products.find((item) => item.id === productId);
    if (!product || typeof size !== 'string' || !product.sizes.includes(size)) return [];
    if (typeof quantity !== 'number' || !Number.isFinite(quantity)) return [];

    return [{ productId: product.id, size, quantity: clampQuantity(quantity) }];
  });
}

export function loadCartLines(products: Product[]): CartLine[] {
  try {
    const stored = window.localStorage.getItem(STORE.cartStorageKey);
    return stored ? sanitizeCartLines(JSON.parse(stored), products) : [];
  } catch {
    return [];
  }
}

export function saveCartLines(lines: CartLine[]): void {
  try {
    window.localStorage.setItem(STORE.cartStorageKey, JSON.stringify(lines));
  } catch {
    // Storage can be unavailable (private mode, quota); the cart still works for this session.
  }
}

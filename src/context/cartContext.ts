import { createContext } from 'react';
import type { CartLine } from '@/types/catalogue';
import type { CartTotals } from '@/lib/pricing';

export interface CartContextValue {
  lines: CartLine[];
  totals: CartTotals;
  addItem: (productId: string, size: string, quantity: number) => void;
  setQuantity: (productId: string, size: string, quantity: number) => void;
  changeSize: (productId: string, size: string, nextSize: string) => void;
  removeItem: (productId: string, size: string) => void;
}

export const CartContext = createContext<CartContextValue | null>(null);

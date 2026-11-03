import { useEffect, useMemo, useReducer, type ReactNode } from 'react';
import { CATEGORIES } from '@/config/categories';
import { COMBO_OFFERS } from '@/config/comboOffers';
import { PRODUCTS } from '@/config/products';
import { CartContext, type CartContextValue } from '@/context/cartContext';
import { cartReducer, loadCartLines, saveCartLines } from '@/lib/cartReducer';
import { calculateCartTotals } from '@/lib/pricing';

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, dispatch] = useReducer(cartReducer, PRODUCTS, loadCartLines);

  useEffect(() => {
    saveCartLines(lines);
  }, [lines]);

  const totals = useMemo(
    () => calculateCartTotals(lines, PRODUCTS, CATEGORIES, COMBO_OFFERS),
    [lines],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      totals,
      addItem: (productId, size, quantity) =>
        dispatch({ type: 'add', productId, size, quantity }),
      setQuantity: (productId, size, quantity) =>
        dispatch({ type: 'setQuantity', productId, size, quantity }),
      changeSize: (productId, size, nextSize) =>
        dispatch({ type: 'changeSize', productId, size, nextSize }),
      removeItem: (productId, size) => dispatch({ type: 'remove', productId, size }),
    }),
    [lines, totals],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

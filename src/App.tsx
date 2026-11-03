import { useCallback, useMemo, useState } from 'react';
import CatalogueControls from '@/components/CatalogueControls';
import CartDrawer from '@/components/CartDrawer';
import ComboOffers from '@/components/ComboOffers';
import Header from '@/components/Header';
import ProductDetail from '@/components/ProductDetail';
import ProductGrid from '@/components/ProductGrid';
import Sheet from '@/components/Sheet';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CATEGORIES } from '@/config/categories';
import { PRODUCTS } from '@/config/products';
import { STORE } from '@/config/store';
import { useCart } from '@/hooks/useCart';
import { filterProducts } from '@/lib/catalogue';

export default function App() {
  const { totals } = useCart();
  const [query, setQuery] = useState('');
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [cartOpen, setCartOpen] = useState(false);

  const visibleProducts = useMemo(
    () => filterProducts(PRODUCTS, CATEGORIES, { query, categoryId }),
    [query, categoryId],
  );

  const selectedProduct = PRODUCTS.find((product) => product.id === selectedId);
  const closeProduct = useCallback(() => setSelectedId(null), []);
  const closeCart = useCallback(() => setCartOpen(false), []);
  const resetFilters = useCallback(() => {
    setQuery('');
    setCategoryId(null);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="bg-maroon px-4 py-2 text-center text-xs font-medium tracking-wide text-marigold sm:text-sm">
        {STORE.saleBanner}
      </div>
      <Header itemCount={totals.itemCount} onOpenCart={() => setCartOpen(true)} />

      <main className="mx-auto max-w-7xl space-y-8 px-4 pb-28 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <section className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-deep">Diwali Collection</p>
          <h1 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">Wear the festival in style</h1>
          <p className="max-w-2xl text-sm text-ink-muted sm:text-base">
            Premium everyday tees at single-piece prices, with combo savings across our collar and printed styles.
          </p>
        </section>

        <ComboOffers categories={CATEGORIES} />

        <CatalogueControls
          query={query}
          onQueryChange={setQuery}
          categories={CATEGORIES}
          activeCategoryId={categoryId}
          onCategoryChange={setCategoryId}
        />

        <div className="flex items-center justify-between text-sm text-ink-muted">
          <span>
            {visibleProducts.length} {visibleProducts.length === 1 ? 'tee' : 'tees'}
          </span>
        </div>

        <ProductGrid
          products={visibleProducts}
          categories={CATEGORIES}
          onSelect={setSelectedId}
          onReset={resetFilters}
        />
      </main>

      {selectedProduct && (
        <Sheet onClose={closeProduct} label={selectedProduct.name} placement="bottom">
          <ProductDetail product={selectedProduct} categories={CATEGORIES} />
        </Sheet>
      )}

      {cartOpen && <CartDrawer onClose={closeCart} />}

      <WhatsAppButton />
    </div>
  );
}

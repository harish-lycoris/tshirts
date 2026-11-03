import { ShoppingBag, Sparkles } from 'lucide-react';
import { STORE } from '@/config/store';

interface HeaderProps {
  itemCount: number;
  onOpenCart: () => void;
}

export default function Header({ itemCount, onOpenCart }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon text-marigold shadow-sm">
            <Sparkles className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold text-ink">{STORE.name}</p>
            <p className="hidden text-xs text-ink-muted sm:block">{STORE.tagline}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenCart}
          className="relative flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-cream shadow-sm transition hover:bg-maroon-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label={`Open cart, ${itemCount} items`}
        >
          <ShoppingBag className="h-4 w-4" />
          <span>Cart</span>
          {itemCount > 0 && (
            <span
              key={itemCount}
              className="flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-marigold px-1.5 text-xs font-semibold text-ink animate-pop"
            >
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

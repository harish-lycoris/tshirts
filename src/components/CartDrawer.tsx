import { MessageCircle, ShoppingBag } from 'lucide-react';
import CartLineItem from '@/components/CartLineItem';
import CartSummary from '@/components/CartSummary';
import Sheet from '@/components/Sheet';
import { PRODUCTS } from '@/config/products';
import { useCart } from '@/hooks/useCart';
import { buildOrderMessage, buildWhatsAppUrl } from '@/lib/whatsapp';

interface CartDrawerProps {
  onClose: () => void;
}

export default function CartDrawer({ onClose }: CartDrawerProps) {
  const { totals, changeSize, setQuantity, removeItem } = useCart();
  const isEmpty = totals.lines.length === 0;

  return (
    <Sheet onClose={onClose} label="Your cart" placement="right">
      <div className="border-b border-line/80 bg-paper px-6 py-5 pr-16">
        <h2 className="text-2xl font-semibold text-ink">Your cart</h2>
        <p className="text-sm text-ink-muted">Pick sizes and quantities, then send your order on WhatsApp.</p>
      </div>

      {isEmpty ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-16 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
            <ShoppingBag className="h-7 w-7" />
          </span>
          <div>
            <p className="font-display text-xl font-semibold text-ink">Your cart is empty</p>
            <p className="mt-1 text-sm text-ink-muted">Browse the collection and add your favourites.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-maroon px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-maroon-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Continue shopping
          </button>
        </div>
      ) : (
        <>
          <ul className="flex-1 space-y-3 overflow-y-auto px-4 py-4 sm:px-6">
            {totals.lines.map((line) => {
              const product = PRODUCTS.find((item) => item.id === line.productId);
              if (!product) return null;
              return (
                <CartLineItem
                  key={`${line.productId}-${line.size}`}
                  line={line}
                  product={product}
                  onChangeSize={(nextSize) => changeSize(line.productId, line.size, nextSize)}
                  onChangeQuantity={(quantity) => setQuantity(line.productId, line.size, quantity)}
                  onRemove={() => removeItem(line.productId, line.size)}
                />
              );
            })}
          </ul>

          <div className="space-y-5 border-t border-line/80 bg-paper px-6 py-5">
            <CartSummary totals={totals} />
            <a
              href={buildWhatsAppUrl(buildOrderMessage(totals))}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-whatsapp/25 transition hover:bg-whatsapp-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <MessageCircle className="h-5 w-5" />
              Send order on WhatsApp
            </a>
            <p className="text-center text-xs text-ink-muted">
              Final price and availability are confirmed on WhatsApp.
            </p>
          </div>
        </>
      )}
    </Sheet>
  );
}

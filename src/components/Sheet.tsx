import { useEffect, type ReactNode } from 'react';
import { X } from 'lucide-react';

interface SheetProps {
  onClose: () => void;
  label: string;
  placement: 'bottom' | 'right';
  children: ReactNode;
}

export default function Sheet({ onClose, label, placement, children }: SheetProps) {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const isBottom = placement === 'bottom';

  return (
    <div
      className={`fixed inset-0 z-50 flex ${
        isBottom ? 'items-end justify-center md:items-center md:p-6' : 'justify-end'
      }`}
    >
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-[2px] animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className={
          isBottom
            ? 'relative max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-cream shadow-2xl animate-sheet-up md:max-w-4xl md:rounded-3xl'
            : 'relative flex h-full w-full flex-col bg-cream shadow-2xl animate-slide-in-right sm:max-w-md'
        }
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 rounded-full bg-paper/95 p-2 text-ink shadow-md transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}

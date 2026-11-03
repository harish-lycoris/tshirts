import { Minus, Plus } from 'lucide-react';

interface QuantityStepperProps {
  value: number;
  min?: number;
  max: number;
  onChange: (value: number) => void;
  label: string;
}

export default function QuantityStepper({ value, min = 1, max, onChange, label }: QuantityStepperProps) {
  const buttonClass =
    'flex h-9 w-9 items-center justify-center rounded-full text-ink transition hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold';

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-line bg-paper p-1" role="group" aria-label={label}>
      <button
        type="button"
        className={buttonClass}
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        aria-label={`Decrease ${label}`}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-[2rem] text-center text-sm font-semibold tabular-nums" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className={buttonClass}
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label={`Increase ${label}`}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

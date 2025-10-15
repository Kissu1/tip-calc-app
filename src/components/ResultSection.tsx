import { calculateTipPerPerson, calculateTotalPerPerson } from "@/utils/calculateTip";
import { ResultSectionProps } from "@/types";

export default function ResultSection({ bill, tip, people, onReset }: ResultSectionProps) {
  const tipAmount = calculateTipPerPerson(bill, tip, people);
  const total = calculateTotalPerPerson(bill, tip, people);
  const isResetDisabled = bill === 0 && tip === 0 && people === 1;

  return (
    <section className="bg-[var(--color-neutral-900)] rounded-xl p-8 text-white flex flex-col justify-between">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-[var(--color-neutral-300)]">Tip Amount</p>
            <p className="text-xs text-[var(--color-neutral-400)]">/ person</p>
          </div>
          <p className="text-4xl font-bold text-[var(--color-primary)]">
            ${isNaN(tipAmount) ? "0.00" : tipAmount.toFixed(2)}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-[var(--color-neutral-300)]">Total</p>
            <p className="text-xs text-[var(--color-neutral-400)]">/ person</p>
          </div>
          <p className="text-4xl font-bold text-[var(--color-primary)]">
            ${isNaN(total) ? "0.00" : total.toFixed(2)}
          </p>
        </div>
      </div>

      <button 
        onClick={onReset}
        disabled={isResetDisabled}
        className={`mt-8 text-xl py-3 rounded-md transition-opacity ${
          isResetDisabled 
            ? "bg-[var(--color-neutral-500)] cursor-not-allowed" 
            : "bg-[var(--color-primary)] text-[var(--color-neutral-900)] hover:opacity-80"
        }`}
      >
        RESET
      </button>
    </section>
  );
}
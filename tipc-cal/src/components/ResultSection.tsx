export default function ResultSection() {
  return (
    <section className="bg-[var(--color-neutral-900)] rounded-xl p-8 text-white flex flex-col justify-between">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-[var(--color-neutral-300)]">Tip Amount</p>
            <p className="text-xs text-[var(--color-neutral-400)]">/ person</p>
          </div>
          <p className="text-4xl font-bold text-[var(--color-primary)]">$0.00</p>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-[var(--color-neutral-300)]">Total</p>
            <p className="text-xs text-[var(--color-neutral-400)]">/ person</p>
          </div>
          <p className="text-4xl font-bold text-[var(--color-primary)]">$0.00</p>
        </div>
      </div>

      <button className="mt-8 bg-[var(--color-primary)] text-[var(--color-neutral-900)] text-xl py-3 rounded-md hover:opacity-80">
        RESET
      </button>
    </section>
  );
}

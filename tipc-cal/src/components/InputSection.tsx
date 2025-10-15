export default function InputSection() {
  return (
    <section className="space-y-6">
      <div>
        <label className="block text-[var(--color-neutral-500)] mb-2">
          Bill
        </label>
        <div className="relative">
          <img
            src="/icons/icon-dollar.svg"
            alt=""
            className="absolute left-4 top-4 w-4 h-5 opacity-50"
          />
          <input
            type="number"
            placeholder="0"
            className="w-full bg-[var(--color-neutral-50)] text-right text-2xl text-[var(--color-neutral-900)] px-4 py-2 rounded-md outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-[var(--color-neutral-500)] mb-2">
          Select Tip %
        </label>
        <div className="grid grid-cols-3 gap-3">
          {["5", "10", "15", "25", "50"].map((val) => (
            <button
              key={val}
              className="bg-[var(--color-neutral-900)] text-white text-xl py-2 rounded-md hover:bg-[var(--color-primary)]"
            >
              {val}%
            </button>
          ))}
          <input
            placeholder="Custom"
            className="bg-[var(--color-neutral-50)] text-center text-xl py-2 rounded-md outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-[var(--color-neutral-500)] mb-2">
          Number of People
        </label>
        <div className="relative">
          <img
            src="/icons/icon-person.svg"
            alt=""
            className="absolute left-4 top-4 w-4 h-5 opacity-50"
          />
          <input
            type="number"
            placeholder="0"
            className="w-full bg-[var(--color-neutral-50)] text-right text-2xl text-[var(--color-neutral-900)] px-4 py-2 rounded-md outline-none"
          />
        </div>
      </div>
    </section>
  );
}

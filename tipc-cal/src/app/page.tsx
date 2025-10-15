import InputSection from "@/components/InputSection";
import ResultSection from "@/components/ResultSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-neutral-200)] flex flex-col items-center justify-center p-6">
      <img src="/icons/logo.svg" alt="Splitter Logo" className="mb-10 w-24 h-auto" />
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl grid md:grid-cols-2 gap-6">
        <InputSection />
        <ResultSection />
      </div>
    </main>
  );
}

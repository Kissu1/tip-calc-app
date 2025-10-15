import InputSection from "./InputSection";
import ResultSection from "./ResultSection";

export default function TipCalculator() {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg w-full max-w-3xl grid gap-6 md:grid-cols-2">
      <InputSection />
      <ResultSection />
    </div>
  );
}

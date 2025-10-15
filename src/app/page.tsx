"use client";

import { useState } from "react";
import InputSection from "@/components/InputSection";
import ResultSection from "@/components/ResultSection";
import { calculateTipPerPerson, calculateTotalPerPerson } from "@/utils/calculateTip";

export default function Home() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);

  const tipAmountPerPerson = calculateTipPerPerson(bill, tip, people);
  const totalPerPerson = calculateTotalPerPerson(bill, tip, people);

  const handleReset = () => {
    setBill(0);
    setTip(0);
    setPeople(1);
  };

  return (
    <main className="min-h-screen bg-[var(--color-neutral-200)] flex flex-col items-center justify-center p-6">
      <img src="/icons/logo.svg" alt="Splitter Logo" className="mb-10 w-24 h-auto" />
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl grid md:grid-cols-2 gap-6">
        <InputSection
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
        />
        <ResultSection
          bill={bill}
          tip={tip}
          people={people}
          onReset={handleReset}
        />
      </div>
    </main>
  );
}
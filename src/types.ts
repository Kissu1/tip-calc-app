
export interface InputSectionProps {
  bill: number;
  setBill: (v: number) => void;
  tip: number;
  setTip: (v: number) => void;
  people: number;
  setPeople: (v: number) => void;
}

export interface ResultSectionProps {
  bill: number;
  tip: number;
  people: number;
  onReset: () => void;
}

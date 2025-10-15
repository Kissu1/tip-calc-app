export function calculateTipPerPerson(bill: number, tip: number, people: number): number {
  if (people <= 0 || isNaN(bill) || isNaN(tip) || isNaN(people)) return 0;
  return (bill * (tip / 100)) / people;
}

export function calculateTotalPerPerson(bill: number, tip: number, people: number): number {
  if (people <= 0 || isNaN(bill) || isNaN(tip) || isNaN(people)) return 0;
  const tipAmount = calculateTipPerPerson(bill, tip, people);
  return bill / people + tipAmount;
}
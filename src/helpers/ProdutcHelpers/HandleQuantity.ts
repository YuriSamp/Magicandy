export function handleQuantityPlus(number: number, QuantityofPages: number) {
  const rangeOfSum = number >= 1 && number < QuantityofPages;
  if (rangeOfSum) return number + 1;
  return 1;
}

export function handleQuantityMinus(number: number, QuantityofPages: number) {
  const rangeOfSubtraction = number > 1 && number <= QuantityofPages;
  if (rangeOfSubtraction) return number - 1;
  return 4;
}

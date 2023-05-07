export const minQuantity = 1;
export const maxQuantity = 10;

export const minusQuantity = (Quantity: number) => {
  if (Quantity > minQuantity) return Quantity - 1;
  return 0;
};
export const plusQuantity = (Quantity: number) => {
  if (Quantity < maxQuantity) return Quantity + 1;
  return 0;
};
export const quantityOnChangeHandler = (Quantity: string) => {
  let insertedQuantity = Number(Quantity);
  if (insertedQuantity >= minQuantity && insertedQuantity <= maxQuantity) {
    return insertedQuantity;
  }
};

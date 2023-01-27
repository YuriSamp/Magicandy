import { atom } from 'recoil';

export type CartItem = {
  Price: number;
  _id: string;
  Name: string;
  Quantity: number;
  Image: string;
};

export const CartAtom = atom<CartItem[]>({
  key: 'CartAtom',
  default: [],
});

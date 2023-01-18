import { IProduto } from './IProduto';
import { atom } from 'recoil';

export type CartItem = {
  Price: number;
  Id: Number;
  Name: string;
  Quantity: number;
  Image: string;
};

export const CartAtom = atom<CartItem[]>({
  key: 'CartAtom',
  default: [],
});

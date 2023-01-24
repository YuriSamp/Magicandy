import { IProduto } from 'interface/IProduto';
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

//? ta usando esse Cart pra alguma coisa?
// export const Cart = atom<CartItem[]>({
//   key: 'cart',
//   default: [],
// });

export const Database = atom<IProduto[]>({
  key: 'Database',
  default: [],
});

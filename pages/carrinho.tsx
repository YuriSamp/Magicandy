import React from "react";
import CartItem from "@ui/CartItem";
import { useRecoilState } from "recoil";
import { CartAtom } from "context/Atom";
import Head from "next/head";
import { Subtotal } from "helpers/Subtotal";
import Link from "next/link";

function Cart() {
  const [Lista, setLista] = useRecoilState(CartAtom);
  const FinalPrice = Lista.reduce(
    (acc, item) => (acc += item.Quantity * item.Price),
    0
  );

  const onDeleteHandler = (index: number) => {
    let newList = Lista.filter((_, arrIndex) => index !== arrIndex);
    setLista(newList);
  };

  return (
    <>
      <Head>
        <title>MagiCandy</title>
      </Head>
      <main className="bgMovingEffect flex min-h-[calc(100vh-316px)] flex-col items-center justify-center bg-backgroundPink px-2  py-4">
        <div className="flex w-[80%] max-w-[1000px] flex-col items-center justify-center rounded-lg border-2 border-fontPurple bg-white px-4 py-6 font-kalam text-fontPurple md:px-6">
          <h2 className="text-2xl font-semibold">Lista de Produtos</h2>
          <div className="w-full max-w-[700px]">
            {Lista.map((item, index) => (
              <CartItem
                key={index}
                Name={item.Name}
                Imagem={item.Image}
                Quantity={item.Quantity}
                Price={item.Price}
                OnDeleteHandler={onDeleteHandler}
                Index={index}
              />
            ))}
          </div>
          <div className="flex justify-between items-center w-full max-w-[700px] gap-2 md:flex-row md:gap-52 ">
            <Link
              href="../checkout/passo1"
              className="radius-5 button-secondary my-[1rem] cursor-pointer select-none rounded-lg p-2 font-kalam text-lg ring-2 ring-fontPurple"
            >
              Ir para checkout
            </Link>
            {Subtotal(Lista.length, FinalPrice)}
          </div>
        </div>
      </main>
    </>
  );
}

export default Cart;

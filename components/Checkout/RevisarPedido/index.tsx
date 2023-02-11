import { CartAtom } from "context/Atom";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { FormataBRL } from "utils/ConvertCurrency";
import CheckoutCard from "../ChekoutCard";

export const RevisarPedido = () => {
  const [Lista, _] = useRecoilState(CartAtom);
  const FinalPrice = Lista.reduce(
    (acc, item) => (acc += item.Quantity * item.Price),
    0
  );

  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-4">
        {Lista.map((item, index) => (
          <div
            className="rounded-lg border-2 border-gray-300 px-4 py-2"
            key={index}
          >
            <div className="flex gap-8 pt-6">
              <div className="w-1/2">
                <CheckoutCard
                  Name={item.Name}
                  Imagem={item.Image}
                  Quantity={item.Quantity}
                  Price={item.Price}
                  Index={index}
                />
              </div>
              <div className="flex flex-col pl-16 pt-2">
                <p>Escolha sua opção de entrega</p>
                <div className="flex gap-2">
                  <input type="radio" name="shipment" value="Card" />
                  <p> Entrega expressa + {FormataBRL(14)}</p>
                </div>
                <div className="flex gap-2">
                  <input type="radio" name="shipment" value="Card" />
                  <p>Entrega comum</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="flex items-center justify-center gap-12 pt-8 ">
        <Link
          href="./passo2"
          className=" radius-5 button-secondary my-[1rem] flex min-w-[110px] cursor-pointer select-none items-center   justify-center gap-2 rounded-lg bg-backgroundWhite p-2 font-kalam text-lg ring-2 ring-fontPurple"
        >
          <AiOutlineArrowLeft />
          Voltar
        </Link>
        <Link
          href=""
          className="radius-5 button-secondary my-[1rem] flex min-w-[110px] cursor-pointer select-none items-center   justify-center gap-2 rounded-lg bg-backgroundWhite p-2  font-kalam text-lg ring-2 ring-fontPurple"
        >
          Finalizar a compra
          <AiOutlineArrowRight />
        </Link>
        <p className="text-xl text-red-800">
          Total do pedido: {FormataBRL(FinalPrice)}
        </p>
      </section>
    </section>
  );
};

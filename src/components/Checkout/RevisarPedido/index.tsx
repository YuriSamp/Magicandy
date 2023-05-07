import { CartAtom } from "src/context/Atom";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { FormataBRL } from "src/utils/ConvertCurrency";
import CheckoutCard from "../ChekoutCard";
import Swal from 'sweetalert2';

export const RevisarPedido = () => {
  const [Lista, _] = useRecoilState(CartAtom);
  const FinalPrice = Lista.reduce(
    (acc, item) => (acc += item.Quantity * item.Price),
    0
  );

  const handleForm = (e: any) => {
    e.preventDefault()

    Swal.fire({
      text: 'Obrigado por testar a nossa aplicação, espero que tenha gostado',
      imageUrl: '/thx.png',
      imageWidth: 370,
      imageHeight: 247,
      imageAlt: 'Custom image',
    })

  }

  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-4">
        {Lista.map((item, index) => (
          <div
            className="rounded-lg border-2 border-gray-300"
            key={index}
          >
            <div className="flex gap-8 ">
              <CheckoutCard
                Name={item.Name}
                Imagem={item.Image}
                Quantity={item.Quantity}
                Price={item.Price}
                Index={index}
              />
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
        <button
          onClick={(e) => handleForm(e)}
          className="radius-5 button-secondary my-[1rem] flex min-w-[110px] cursor-pointer select-none items-center   justify-center gap-2 rounded-lg bg-backgroundWhite p-2  font-kalam text-lg ring-2 ring-fontPurple"
        >
          Finalizar a compra
          <AiOutlineArrowRight />
        </button>
        <p className="text-xl text-red-800">
          Total do pedido: {FormataBRL(FinalPrice)}
        </p>
      </section>
    </section>
  );
};

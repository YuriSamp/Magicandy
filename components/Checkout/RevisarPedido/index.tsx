import { CartAtom } from 'context/Atom'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useRecoilState } from 'recoil'
import { FormataBRL } from 'utils/ConvertCurrency'
import CheckoutCard from '../ChekoutCard'

export const RevisarPedido = () => {

  const [Lista, _] = useRecoilState(CartAtom)

  return (
    <section className='flex flex-col min-w-[810px]'>
      <div className='flex flex-col gap-4'>
        {Lista.map((item, index) => (
          <div className='border-2 border-gray-300 px-4 rounded-lg py-2' key={index}>
            <div>
              <h3 className='text-xl text-center text-red-800'>Data de entrega 6 de fev 2023</h3>
            </div>
            <div className='flex pt-6 gap-8'>
              <div className='w-1/2'>
                <CheckoutCard Name={item.Name} Imagem={item.Image} Quantity={item.Quantity} Price={item.Price} Index={index} />
              </div>
              <div className='flex flex-col pl-16 pt-2'>
                <p>Escolha sua opção de entrega</p>
                <div className='flex gap-2'>
                  <input
                    type='radio'
                    name='shipment'
                    value='Card'
                  />
                  <p> Entrega expressa + {FormataBRL(14)}</p>
                </div>
                <div className='flex gap-2'>
                  <input
                    type='radio'
                    name='shipment'
                    value='Card'
                  />
                  <p>Entrega comum</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      <section className='flex justify-center items-center gap-12 pt-8 '>
        <Link
          href=''
          className='flex items-center justify-center gap-2 min-w-[110px] cursor-pointer text-lg p-2   radius-5 ring-2 my-[1rem] ring-fontPurple bg-backgroundWhite  font-kalam rounded-lg select-none button-secondary'
        >
          Finalizar a compra
          <AiOutlineArrowRight />
        </Link>
        <p className='text-xl text-red-800'>Total do pedido: {FormataBRL(800)}</p>
      </section>
    </section>
  )
}
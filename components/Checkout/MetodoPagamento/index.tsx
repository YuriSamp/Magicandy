import Link from 'next/link'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import PagamentoBox from './PagamentoBox'

export const FormularioCartao = () => {
  return (
    <section className='flex flex-col'>
      <PagamentoBox
        type='Cartões de credito'
        text='Usar o cartão de credito para finalizar o pedido'
      />
      <PagamentoBox
        type='Boleto'
        text='Vencimento em 1 dia útil. A data de entrega será alterada devido ao tempo de processamento do Boleto. Veja mais na próxima página.'
      />
      <PagamentoBox
        type='Pix'
        text='O código Pix gerado para o pagamento é válido por 30 minutos após a finalização do pedido.'
      />

      <section className='flex justify-center items-center gap-12 pt-8 '>
        <Link
          href='./passo1'
          className=' flex items-center justify-center gap-2 min-w-[110px] cursor-pointer text-lg p-2   radius-5 ring-2 my-[1rem] ring-fontPurple bg-backgroundWhite font-kalam rounded-lg select-none button-secondary'
        >
          <AiOutlineArrowLeft />
          Voltar
        </Link>

        <Link
          href='./passo3'
          className='flex items-center justify-center gap-2 min-w-[110px] cursor-pointer text-lg p-2   radius-5 ring-2 my-[1rem] ring-fontPurple bg-backgroundWhite  font-kalam rounded-lg select-none button-secondary'
        >
          Avançar
          <AiOutlineArrowRight />
        </Link>
      </section>
    </section>
  )
}
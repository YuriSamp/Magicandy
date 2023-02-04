import Fields from '@ui/Fields/Fields'
import Link from 'next/link'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

export const FormularioCheckout = () => {
  return (
    <section className='flex flex-col min-w-[810px]'>
      <div className='flex gap-12 justify-center items-center'>
        <div className='space-y-2'>
          <Fields
            Name="name"
            Label="Nome"
            Type="text"
          />
          <Fields
            Name="Email"
            Label="E-mail"
            Type="email"
          />
          <Fields
            Name="Cep"
            Label="Cep"
            Type="text"
          />
        </div>
        <div className='space-y-2'>
          <Fields
            Name="Sobrenome"
            Label="Sobrenome"
            Type="text"
          />
          <Fields
            Name="telephone"
            Label="Telefone"
            Type="tel"
          />
          <Fields
            Name="Complemento"
            Label="Complemento (adicional)"
            Type="text"
          />
        </div>
      </div>

      <section className='flex justify-center items-center gap-12 pt-8 '>
        <button className='hidden'>
          <AiOutlineArrowLeft />
          Voltar
        </button>
        <Link
          href='./passo2'
          className=' flex items-center justify-center gap-2 min-w-[110px] cursor-pointer text-lg p-2   radius-5 ring-2 my-[1rem] ring-fontPurple bg-backgroundWhite font-kalam rounded-lg select-none button-secondary'
        >
          Avançar
          <AiOutlineArrowRight />
        </Link>
      </section>
    </section>
  )
}
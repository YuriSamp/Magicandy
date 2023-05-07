import Button from '../Button';
import Fields from '../Fields/Fields';
import React from 'react'
import MaskedInput from 'react-text-mask';
import Swal from 'sweetalert2';
import { z } from 'zod';

const opcoes = [
  'Duvida',
  'Sugestão',
  'Reclamação',
  'Outros'
]

const createContactSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().nonempty(),
  phone: z.string().nonempty(),
  contactReason: z.string().nonempty(),
  message: z.string().nonempty(),
})

function FormBody() {

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    Swal.fire({
      icon: 'success',
      text: 'A sua mensagem foi enviada para o nosso email',
    })
  };

  return (
    <form
      className='flex flex-col gap-4 w-full max-w-[30rem] bg-backgroundWhite p-10 rounded-l-lg md:rounded-l-none rounded-r-lg'
      onSubmit={onSubmitHandler}
    >
      <div className='pt-4 text-center'>
        <h1 className='text-2xl font-kalam text-fontPurple font-semibold'>Entre em contato conosco</h1>
      </div>

      <Fields
        Name="name"
        Label="Nome *"
        Type="text"
      />

      <Fields
        Name="email"
        Label="E-mail *"
        Type="email"
      />

      <div className='flex flex-col gap-2'>
        <label htmlFor='my-input-id'>Telefone</label>
        <MaskedInput
          mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          className='py-2 px-4 rounded-lg  ring-backgroundPink ring-2 bg-slate-200'
          guide={false}
          id="my-input-id"
          onBlur={() => { }}
          onChange={() => { }}
        />
        <span></span>
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='contactReason'>Motivo do contato *</label>
        <select id='contactReason' className='py-2 px-4 rounded-lg ring-backgroundPink ring-2 bg-slate-200 '>
          {opcoes.map(item => <option key={item}>{item}</option>)}
        </select>
        <span></span>
      </div>

      <Fields
        Name="textarea"
        Label="Mensagem *"
        Type="textarea"
      />

      <div className='flex justify-center pt-4'>
        <Button>
          Enviar Formulario
        </Button>
      </div>
      <span className='text-center text-red-500'>* Campos obrigatórios</span>
    </form>
  )
}

export default FormBody

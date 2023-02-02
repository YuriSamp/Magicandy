import Button from '@ui/Button';
import Fields from '@ui/Fields/Fields';
import React from 'react'
import MaskedInput from 'react-text-mask';
import Swal from 'sweetalert2';

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
      className='flex flex-col gap-4 w-full max-w-[30rem] bg-backgroundWhite p-10 rounded-r-lg'
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

      <MaskedInput
        mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        className='py-2 px-4 rounded-lg  ring-backgroundPink ring-2 bg-slate-200'
        guide={false}
        id="my-input-id"
        onBlur={() => { }}
        onChange={() => { }}
      />

      <div className='flex flex-col gap-2'>
        <label htmlFor='contactReason'>Motivo do contato *</label>
        <select id='contactReason' className='py-2 px-4 rounded-lg ring-backgroundPink ring-2 bg-slate-200 '>
          <option>Duvida</option>
          <option>Sugestão</option>
          <option>Reclamação</option>
          <option>Outros</option>
        </select>
        <span></span>
      </div>

      <Fields
        Name="textarea"
        Label="Mensagem *"
        Type="textarea"
      />

      <div className='flex justify-center pt-4'>
        <Button value={'Enviar Formulario'} />
      </div>
      <span className='text-center text-red-500'>* Campos obrigatórios</span>
    </form>
  )
}

export default FormBody
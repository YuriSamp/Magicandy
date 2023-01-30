import React from 'react'
import Button from '@ui/Button';
import Fields from 'components/Fields/Fields';
import Head from 'next/head';
import Image from 'next/image';
import FormImage from 'public/form.png'
import Swal from 'sweetalert2'
import MaskedInput from 'react-text-mask'


// type Inputs = {
//   Nome: string,
//   Email: string,
//   Telefone: string,
//   MotivoDoContato: string,
//   texto: string,
// };

function Contato() {
  const onSubmitHandler = () => {
    Swal.fire({
      icon: 'success',
      text: 'A sua mensagem foi enviada para o nosso email',
    })
  };

  return (
    <>
      <Head>
        <title>MagiCandy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className='flex flex-col min-h-[80vh] px-4 py-4 items-center justify-center w-full min-w-[320px]  bg-backgroundPink' >
        <div className='flex rounded-lg border-2 border-fontPurple'>
          <Image src={FormImage} alt='' width={500} className='rounded-l-lg' priority />
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

            <Fields
              Name="telephone"
              Label="Telefone *"
              Type="tel"
            />

            <MaskedInput
              mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              className='py-2 px-4 rounded-lg  ring-backgroundPink ring-2 bg-slate-200 maskedinput'
              placeholder="Enter a phone number"
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
        </div>
      </main>
    </>
  )
}

export default Contato
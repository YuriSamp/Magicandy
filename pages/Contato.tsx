import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { useForm, SubmitHandler } from "react-hook-form";
import Button from '../components/Button/Button';
import Fields from '../components/Fields/Fields';

//TODO Criar um componente botao

type Inputs = {
  Nome: string,
  Email: string,
  Telefone: string,
  MotivoDoContato: string,
  texto: string,
};

function Contato() {
  const onSubmitHandler = () => {};

  return (
    <>
      <Navbar />
      <main className='flex flex-col min-h-[80vh] px-4 py-4 items-center justify-center w-full min-w-[320px]  bg-backgroundPink' >
        <form
          className='flex flex-col gap-4 w-full max-w-[30rem] bg-backgroundWhite p-10 rounded-lg border-2 border-fontPurple'
          onSubmit={onSubmitHandler}
        >
          <div className='pt-4 text-center'>
            <h1 className='text-2xl font-kalam text-fontPurple font-semibold'>Entre em contato conosco</h1>
          </div>

          <Fields 
            Name="name"
            Label="Nome"
            Type="text"
          />

          <Fields 
            Name="email"
            Label="E-mail"
            Type="email"
          />

          <Fields
            Name="telephone"
            Label="Telefone"
            Type="tel"
          />

          <div className='flex flex-col gap-2'>
            <label htmlFor='contactReason'>Motivo do contato</label>
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
            Label="Mensagem"
            Type="textarea"
          />

          <div className='flex justify-center pt-4'>
            <Button value={'Enviar Formulario'} />
          </div>
        </form>
        <div>

        </div>
      </main>
      <Footer />
    </>
  )
}

export default Contato
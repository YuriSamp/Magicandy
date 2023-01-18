import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { useForm, SubmitHandler } from "react-hook-form";
import Button from '../components/Button/Button';

//TODO Criar um componente botao

type Inputs = {
  Nome: string,
  Email: string,
  Telefone: string,
  MotivoDoContato: string,
  texto: string,
};

function Contato() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <>
      <Navbar />
      <main className='flex flex-col min-h-[80vh] px-4 py-4 items-center justify-center w-full min-w-[320px]  bg-backgroundPink' >
        <form className='flex flex-col gap-4 w-full max-w-[30rem] bg-backgroundWhite p-10 rounded-lg border-2 border-fontPurple' onSubmit={handleSubmit(onSubmit)}>
          <div className='pt-4 text-center'>
            <h1 className='text-2xl font-kalam text-fontPurple font-semibold'>Entre em contato conosco</h1>
          </div>

          <div className='flex flex-col space-y-1'>
            <label htmlFor='name'>Nome</label>
            <input type='text' id='name' className='py-2 px-4 rounded-lg  ring-backgroundPink ring-2 bg-slate-200' {...register("Nome")} />
            <span></span>
          </div>

          <div className='flex flex-col space-y-1'>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' className='py-2 px-4 rounded-lg ring-backgroundPink ring-2 bg-slate-200'  {...register("Email")} />
            <span></span>
          </div>

          <div className='flex flex-col space-y-1'>
            <label htmlFor='telephone'>Telefone</label>
            <input type='text' id='telephone' className='py-2 px-4 rounded-lg ring-backgroundPink ring-2 bg-slate-200' {...register("Telefone")} />
            <span></span>
          </div>

          <div className='flex flex-col space-y-1'>
            <label htmlFor='contactReason'>Motivo do contato</label>
            <select id='contactReason' className='py-2 px-4 rounded-lg ring-backgroundPink ring-2 bg-slate-200 ' {...register("MotivoDoContato")}>
              <option >Duvida</option>
              <option>Sugestão</option>
              <option>Reclamação</option>
              <option>Outros</option>
            </select>
            <span></span>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='text'>Mensagem</label>
            <textarea id='text' className='py-2 px-4 rounded-lg resize-none h-40 ring-backgroundPink ring-2 bg-slate-200' {...register("texto")} />
            <span></span>
          </div>

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
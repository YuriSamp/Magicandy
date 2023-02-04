import { FormularioCartao } from '@ui/Checkout/MetodoPagamento'
import Head from 'next/head'
import React from 'react'


function Passo2() {
  return (
    <>
      <Head>
        <title>MagiCandy</title>
      </Head>
      <main className='bg-backgroundPink flex flex-col justify-center items-center p-12 py-16'>
        <div className='flex rounded-lg border-2 border-fontPurple overflow-hidden'>
          <form
            className='flex flex-col gap-4 w-full  bg-backgroundWhite p-10 rounded-r-lg'
          // onSubmit={onSubmitHandler}
          >
            <div className='pt-4 text-center'>
              <h1 className='text-2xl font-kalam text-fontPurple font-semibold'>Escolha sua forma de pagamento</h1>
            </div>
            <FormularioCartao />
          </form>
        </div>
      </main>
    </>
  )
}

export default Passo2
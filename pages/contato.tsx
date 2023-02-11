import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import FormImage from 'public/form.png'
import FormBody from '@ui/FormularioContato/FormBody';

function Contato() {
  return (
    <>
      <Head>
        <title>MagiCandy</title>
      </Head>
      <main className='flex flex-col min-h-[80vh] px-4 py-4 items-center  justify-center w-full min-w-[320px] bgMovingEffect' >
        <div className='flex rounded-lg border-2 border-fontPurple'>
          <Image src={FormImage} alt='' width={500} className='hidden md:block rounded-l-lg' priority />
          <FormBody />
        </div>
      </main>
    </>
  )
}

export default Contato
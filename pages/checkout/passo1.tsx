
import CheckoutRender from '@ui/Checkout/CheckoutRender'
import { FormularioCheckout } from '@ui/Checkout/InformacaoUsuario'
import Head from 'next/head'
import React from 'react'


function Passo1() {
  return (
    <>
      <Head>
        <title>MagiCandy</title>
      </Head>
      <CheckoutRender Passo={1} />
    </>
  )
}

export default Passo1
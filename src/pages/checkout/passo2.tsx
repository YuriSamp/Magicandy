import CheckoutRender from '@ui/Checkout/CheckoutRender'
import Head from 'next/head'
import React from 'react'


function Passo2() {
  return (
    <>
      <Head>
        <title>MagiCandy</title>
      </Head>
      <CheckoutRender Passo={2} />
    </>
  )
}

export default Passo2
import CheckoutRender from '@ui/Checkout/CheckoutRender'
import Head from 'next/head'
import React from 'react'

function Passo3() {
  return (
    <>
      <Head>
        <title>MagiCandy</title>
      </Head>
      <CheckoutRender Passo={3} />
    </>
  )
}

export default Passo3
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import CartItem from '../../components/CartItem/CartItem'
import Link from 'next/link'
import Button from '../../components/Button/Button'


function Cart() {
  return (
    <>
      <Navbar />
      <main className='flex flex-col px-2 items-center justify-center py-4 bg-backgroundPink'>
        
        <div className='flex flex-col w-[80%] px-4 py-6 md:px-6 max-w-[1000px] items-center justify-center text-fontPurple border-fontPurple border-2 bg-white font-kalam rounded-lg'>

          <h2 className='text-2xl font-semibold'>Lista de Produtos</h2>
          <CartItem />
          <CartItem />
          <CartItem />
          <Button value={"Finalizar compra"} href="../" type="LINK" />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Cart
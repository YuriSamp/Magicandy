import React from 'react'
import CartItem from '@ui/CartItem'
import Button from '@ui/Button'
import { useRecoilState } from 'recoil'
import { CartAtom } from 'context/Atom'
import Head from 'next/head'
import { Subtotal } from 'helpers/Subtotal'

function Cart() {
  const [Lista, setLista] = useRecoilState(CartAtom)
  const FinalPrice = Lista.reduce((acc, item) => acc += item.Quantity * item.Price, 0)

  const onDeleteHandler = (index: number) => {
    let newList = Lista.filter((_, arrIndex) => index !== arrIndex)
    setLista(newList)
  }

  return (
    <>
      <Head>
        <title>MagiCandy</title>
      </Head>
      <main className='flex flex-col px-2 items-center justify-center py-4 bg-backgroundPink min-h-[calc(100vh-316px)]  bgMovingEffect'>
        <div className='flex flex-col w-[80%] px-4 py-6 md:px-6 max-w-[1000px] items-center justify-center text-fontPurple border-fontPurple border-2 bg-white font-kalam rounded-lg'>
          <h2 className='text-2xl font-semibold'>Lista de Produtos</h2>
          <div>
            {Lista.map((item, index) => (
              <CartItem key={index} Name={item.Name} Imagem={item.Image} Quantity={item.Quantity} Price={item.Price} OnDeleteHandler={onDeleteHandler} Index={index} />
            ))}
          </div>
          <div className='flex items-center gap=2 md:gap-52 '>
            <Button href="../checkout/passo1" type="LINK" >Ir para checkout</Button>
            {Subtotal(Lista.length, FinalPrice)}
          </div>
        </div>
      </main>
    </>
  )
}

export default Cart
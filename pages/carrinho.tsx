import React from 'react'
import Footer from '@ui/Footer'
import Navbar from '@ui/Navbar'
import CartItem from '@ui/CartItem'
import Button from '@ui/Button'
import { useRecoilValue } from 'recoil'
import { CartAtom } from 'context/Atom'
import { FormataBRL } from 'utils/ConvertCurrency'


function Cart() {

  const Lista = useRecoilValue(CartAtom)
  const FinalPrice = Lista.reduce((acc, item) => acc += item.Quantity * item.Price, 0)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const Cart = {
      Lista,
      FinalPrice
    }


    // const CartItem = {
    //   Name: props.Name,
    //   Quantity: value,
    //   Id: props.Id,
    //   Price: props.Price,
    //   Image: props.Imagem
    // }
    // setCart((prevState) => [...prevState, CartItem])
  }
  return (
    <>
      <Navbar />
      <main className='flex flex-col px-2 items-center justify-center py-4 bg-backgroundPink'>

        <div className='flex flex-col w-[80%] px-4 py-6 md:px-6 max-w-[1000px] items-center justify-center text-fontPurple border-fontPurple border-2 bg-white font-kalam rounded-lg'>

          <h2 className='text-2xl font-semibold'>Lista de Produtos</h2>
          <div>
            {Lista.map((item, index) => (
              <CartItem key={index} Name={item.Name} Imagem={item.Image} Quantity={item.Quantity} Price={item.Price} />
            ))}
          </div>
          <div className='flex items-center sm:gap-52 md:gap-64 '>
            <Button value={"Finalizar compra"} href="../" type="LINK" />
            <h3 className='text-lg'>Total : {FormataBRL(FinalPrice)}</h3>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Cart
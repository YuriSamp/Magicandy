import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import CartItem from '../../components/CartItem/CartItem'
import Button from '../../components/Button/Button'
import { useRecoilValue } from 'recoil'
import { CartAtom } from '../../utils/Atom'


function Cart() {

  const Lista = useRecoilValue(CartAtom)
  console.log(Lista)
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
          <Button value={"Finalizar compra"} href="../" type="LINK" />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Cart
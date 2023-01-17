import Image from 'next/image'
import React from 'react'
import exemplo from '../../public/products/banana-cake.png'


function CartItem(props:any) {

  return (
    <div className='flex flex-row flex-wrap gap-2 items-center w-[100%] max-w-[700px] border-fontPurple border-2 rounded-lg my-4 overflow-hidden'>
        <Image
            className='w-[100%] h-[100%] md:w-[300px] self-center' 
            width={300}
            height={300}
            alt="qlq coisa"
            src={exemplo}
        />
        <div className='flex flex-col justify-center items-center grow text-xl'>
          <div className='flex flex-col p-4'>

            <h3>Nome do produto</h3>
            <span>Quantidade: {5}</span>
            <span>Valor unitário: {"R$ 00.00"}</span>
          </div>
        </div>
    </div>
  )
}

export default CartItem
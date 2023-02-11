import Image from 'next/image'
import React from 'react'
import { FormataBRL } from 'utils/ConvertCurrency'

interface Props {
  Quantity: number;
  Price: number;
  Imagem: string;
  Name: string;
  Index: number;
}

function CheckoutCard(props: Props) {
  return (
    <div data-index={props.Index} className='flex flex-col md:flex-row gap-2  w-full max-w-[700px] '>
      <Image
        className='rounded-lg w-full md:max-w-[300px]'
        width={300}
        height={150}
        alt=""
        src={props.Imagem}
      />
      <div className='flex flex-col text-xl pl-4 justify-center items-center grow'>
          <h3 className='max-w-[200px]'>{props.Name}</h3>
          <p>Quantidade: {props.Quantity}</p>
          <p>{FormataBRL(props.Price)}</p>
      </div>
      
    </div>
  )
}

export default CheckoutCard
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
    <div data-index={props.Index} className='flex flex-row flex-wrap gap-2  w-full max-w-[700px] '>
      <Image
        className='rounded-lg'
        width={150}
        height={150}
        alt=""
        src={props.Imagem}
      />
      <div className='flex flex-col grow text-xl '>
        <div className='flex flex-col pl-4'>
          <h3 className='max-w-[200px]'>{props.Name}</h3>
          <p>Quantidade: {props.Quantity}</p>
          <p>{FormataBRL(props.Price)}</p>
        </div>
      </div>
    </div>
  )
}

export default CheckoutCard
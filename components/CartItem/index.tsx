import Button from '@ui/Button';
import Image from 'next/image'
import React from 'react'
import { FormataBRL } from 'utils/ConvertCurrency'

interface Props {
  Quantity: number;
  Price: number;
  Imagem: string;
  Name: string;
}



function CartItem(props: Props) {

  return (
    <div className='flex flex-row flex-wrap gap-2 items-center w-full max-w-[700px] border-fontPurple border-2 rounded-lg my-4 overflow-hidden'>
      <Image
        className='w-full h-full md:w-[300px] self-center'
        width={300}
        height={300}
        alt="qlq coisa"
        src={props.Imagem}
      />
      <div className='flex flex-col  grow text-xl '>
        <div className='flex flex-col p-4'>
          <h3>{props.Name}</h3>
          <span>Quantidade: {props.Quantity}</span>
          <span>Valor unitário: {FormataBRL(props.Price)}</span>
        </div>
        <div className='px-4 flex items-center md:self-start'>
          <Button value={"Deletar"} />
        </div>
      </div>
    </div>
  )
}

export default CartItem
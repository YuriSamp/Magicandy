import Image from 'next/image'
import React from 'react'
import { FormataBRL } from '../../utils/ConvertCurrency'
import { AiFillDelete } from 'react-icons/ai'
interface Props {
  Quantity: number;
  Price: number;
  Imagem: string;
  Name: string;
}

function CartItem(props: Props) {

  return (
    <div className='flex flex-row flex-wrap gap-2 items-center w-[100%] max-w-[700px] border-fontPurple border-2 rounded-lg my-4 overflow-hidden'>
      <Image
        className='w-full h-full md:w-[300px] self-center'
        width={300}
        height={300}
        alt="qlq coisa"
        src={props.Imagem}
      />
      <div className='flex flex-col justify-center items-center grow text-xl'>
        <div className='flex justify-end w-full px-2 mb[-10]'>
          <AiFillDelete className='' />
        </div>
        <div className='flex flex-col p-4'>
          <h3>{props.Name}</h3>
          <span>Quantidade: {props.Quantity}</span>
          <span>Valor unitário: {FormataBRL(props.Price)}</span>
        </div>
      </div>
    </div>
  )
}

export default CartItem
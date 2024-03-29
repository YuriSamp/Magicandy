import Image from 'next/image'
import React from 'react'
import { FormataBRL } from 'src/utils/ConvertCurrency'

interface Props {
  Quantity: number;
  Price: number;
  Imagem: string;
  Name: string;
  OnDeleteHandler: any;
  Index: number;
}

function CartItem(props: Props) {
  return (
    <div data-index={props.Index} className='flex flex-col md:flex-row gap-2 items-center w-full border-fontPurple border-2 rounded-lg my-4 overflow-hidden'>
      <Image
        className='w-full h-full md:max-w-[300px] self-center'
        width={300}
        height={300}
        alt=""
        src={props.Imagem}
      />
      <div className='flex flex-col grow text-xl '>
        <div className='flex flex-col p-4'>
          <h3>{props.Name}</h3>
          <span>Quantidade: {props.Quantity}</span>
          <span>Valor unitário: {FormataBRL(props.Price)}</span>
        </div>
        <div className='px-4 flex items-center md:self-start'>
          <button
            className='cursor-pointer text-lg p-2  mx-auto radius-5 ring-2 my-[1rem] ring-backgroundPink font-kalam rounded-lg select-none button-default'
            onClick={() => props.OnDeleteHandler(props.Index)}
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem

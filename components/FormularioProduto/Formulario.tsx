import React, { useState, } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { FormataBRL } from 'utils/ConvertCurrency';
import Button from '@ui/Button';
import { useRecoilState } from 'recoil'
import { CartAtom, CartItem } from 'context/Atom'
import Swal from 'sweetalert2'
interface Props {
  Price: number,
  _id: string,
  Name: string
  Imagem: string
}

function FormularioProduto(props: Props) {

  const [value, setValue] = useState(1);
  const [_, setCart] = useRecoilState<CartItem[]>(CartAtom)

  let minQuantity = 1
  let maxQuantity = 10

  const minusQuantity = () => {
    if (value > minQuantity) setValue((value) - 1)
  }
  const plusQuantity = () => {
    if (value < maxQuantity) setValue((value) + 1)
  }
  const quantityOnChangeHandler = (value: string) => {
    let insertedValue = Number(value)
    if (insertedValue >= minQuantity && insertedValue <= maxQuantity) {
      setValue(insertedValue)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const CartItem = {
      Name: props.Name,
      Quantity: value,
      _id: props._id,
      Price: props.Price,
      Image: props.Imagem
    }

    //* Alterar o botão para ser um link de voltar para produtos
    Swal.fire({
      icon: 'success',
      text: 'O seu pedido foi adicionado ao carrinho',
    })

    setCart((prevState) => [...prevState, CartItem])
  }


  return (
    <form className='flex flex-col gap-6 border-b-2 md:border-b-0 border-fontPurple py-4' onSubmit={(e) => handleSubmit(e)}>
      <div className='flex gap-4 justify-between'>
        <label htmlFor="textQuantity">Quantidade:</label>
        <input
          type="number"
          id="textQuantity"
          className='self-center bg-transparent w-full text-center border-fontPurple border-2 rounded-lg select-none'
          min={minQuantity}
          max={maxQuantity}
          onChange={e => quantityOnChangeHandler(e.target.value)}
          value={value}
          readOnly={true}
        />
      </div>
      <div className='flex gap-4 justify-center items-center'>
        <AiOutlineMinusCircle
          className='text-3xl fill-fontPurple cursor-pointer'
          onClick={minusQuantity}
        />
        <input
          className='class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-backgroundPink'
          type='range'
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          min={minQuantity}
          max={maxQuantity}
        />
        <AiOutlinePlusCircle
          className='text-3xl fill-fontPurple cursor-pointer'
          onClick={plusQuantity}
        />

      </div>
      <h2 className='text-xl text-start font-semibold select-none' >
        Total: {FormataBRL((value * props.Price))}
      </h2>
      <Button value='Adicionar ao carrinho' />
    </form>
  );
}

export default FormularioProduto;


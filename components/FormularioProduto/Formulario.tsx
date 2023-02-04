import React, { useState, } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { FormataBRL } from 'utils/ConvertCurrency';
import Button from '@ui/Button';
import { useRecoilState } from 'recoil'
import { CartAtom, CartItem } from 'context/Atom'
import Swal from 'sweetalert2'
import { maxQuantity, minQuantity, minusQuantity, plusQuantity, quantityOnChangeHandler } from './FormHelper';

//TODO refatorar o componente
//refatorar com um hook
//deixar mais semantico

interface Props {
  Price: number,
  _id: string,
  Name: string
  Imagem: string
}

function FormularioProduto(props: Props) {
  const [Quantity, setQuantity] = useState(1);
  const [_, setCart] = useRecoilState<CartItem[]>(CartAtom)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const CartItem = {
      Name: props.Name,
      Quantity: Quantity,
      _id: props._id,
      Price: props.Price,
      Image: props.Imagem
    }
    Swal.fire({
      icon: 'success',
      text: 'O seu pedido foi adicionado ao carrinho',
    })
    setCart((prevState) => [...prevState, CartItem])
  }

  return (
    <form className='flex flex-col gap-6 border-b-2 md:border-b-0 border-fontPurple py-4' onSubmit={(e) => handleSubmit(e)}>
      <div className='flex gap-4 justify-between'>
        <label >Quantidade:</label>
        <input
          type="number"
          className='self-center bg-transparent w-full text-center border-fontPurple border-2 rounded-lg select-none'
          min={minQuantity}
          max={maxQuantity}
          onChange={e => quantityOnChangeHandler(e.target.value)}
          value={Quantity}
          readOnly={true}
        />
      </div>
      <div className='flex gap-4 justify-center items-center'>
        <AiOutlineMinusCircle
          className='text-3xl fill-fontPurple'
          onClick={() => minusQuantity(Quantity) !== 0 && setQuantity(minusQuantity(Quantity))}
        />
        <input
          className='class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-backgroundPink'
          type='range'
          value={Quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          min={minQuantity}
          max={maxQuantity}
        />
        <AiOutlinePlusCircle
          className='text-3xl fill-fontPurple'
          onClick={() => plusQuantity(Quantity) !== 0 && setQuantity(plusQuantity(Quantity))}
        />
      </div>
      <h2 className='text-xl text-start font-semibold select-none' >
        Total: {FormataBRL((Quantity * props.Price))}
      </h2>
      <Button >
        Adicionar ao carrinho
      </Button>
    </form>
  );
}

export default FormularioProduto;


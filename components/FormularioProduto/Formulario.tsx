import React, { useState, } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { FormataBRL } from '../../utils/ConvertCurrency';
import Button from '../Button/Button';

interface Props {
  Price: number
}

function FormularioProduto(props: Props) {
  const [value, setValue] = useState(1);
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

  return (
    <form className='flex flex-col gap-6 border-b-2 md:border-b-0 border-fontPurple py-4'>
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
          className='text-3xl fill-fontPurple'
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
          className='text-3xl fill-fontPurple'
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

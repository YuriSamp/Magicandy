import React, { useState } from 'react';
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/Ai'

function FormularioProduto() {
  const [value, setValue] = useState(1);
  let minQuantity = 1
  let maxQuantity = 10
  const minusQuantity = () => {
    if (value > minQuantity) setValue((value) - 1)
  }
  const plusQuantity = () => {
    if (value < maxQuantity) setValue((value) + 1)
  }
  const quantityOnChangeHandler = (e) => {
    let insertedValue = Number(e.target.value)
    if (insertedValue >= minQuantity && insertedValue <= maxQuantity){
        setValue(insertedValue)
    }
  }

  return (
    <form className='flex flex-col gap-4 border-b-2 md:border-b-0 border-fontPurple py-4'>
      <div className='flex gap-4 justify-between'>
        <label htmlFor="textQuantity">Quantidade:</label>
        <input
          type="number"
          id="textQuantity"
          className='self-center bg-transparent w-full text-center border-fontPurple border-2 rounded-lg'
          min={minQuantity}
          max={maxQuantity}
          onChange={quantityOnChangeHandler}
          value={value}
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
      <button className='select-none text-lg p-2 mx-auto my-[1rem] radius-5 ring-2 ring-[#FF8FB1] rounded-lg font-kalam'>
        Adicionar ao carrinho
      </button>
    </form>
  );
}

export default FormularioProduto;

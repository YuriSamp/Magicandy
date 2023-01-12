import React, { useState } from 'react';

function FormularioProduto() {
  const [value, setValue] = useState("1");

  return (
    <form className='flex flex-col'>
      <h1>{value}</h1>
      <input
        type='range'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min={1}
        max={10}
      />
      <button>Adicionar ao carrinho</button>
    </form>
  );
}

export default FormularioProduto;

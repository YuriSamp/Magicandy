import React from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
  onChangeHandler: (event: any) => void
}

function Search(props: Props) {
  return (
    <div className='flex items-center relative w-fit'>
      <input
        maxLength={20}
        onChange={event => { props.onChangeHandler(event) }}
        type="text"
        placeholder="Buscar"
        className='ring-fontPurple ring-2 px-3 py-2 pr-9 rounded-lg' />
      <BsSearch className='absolute right-[12px]' />
    </div>
  )
}

export default Search
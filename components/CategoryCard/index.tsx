import Image from 'next/image'
import React from 'react'

function CategoryCard(props: any) {
  return (
    <div className='flex items-stretch justify-center border-t-2 border-b-2 border-backgroundPink'>
        <Image
            className='w-1/2'
            src={props.Src}
            alt={props.Alt}
            width={200}
            height={200}
        />
        <span className='flex flex-col justify-center p-6 gap-8 w-1/2 text-backgroundWhite description'>
            <h2 className='text-center text-3xl font-kalam'>    
                {props.productTitle}
            </h2>
            <p className='text-2xl'>
                {props.children}
            </p>
        </span>
    </div>
  )
}

export default CategoryCard
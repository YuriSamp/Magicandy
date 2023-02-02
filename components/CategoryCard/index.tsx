import Image from 'next/image'
import React from 'react'

function CategoryCard(props: any) {
  return (
    <div className='flex items-center justify-center gap-6'>
        <Image
            className='w-[calc(50%_+_28px)]'
            src={props.Src}
            alt={props.Alt}
            width={200}
            height={200}
        />
        <span className='flex flex-col gap-8 w-1/2 text-backgroundWhite description '>
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
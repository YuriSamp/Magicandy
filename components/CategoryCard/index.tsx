import Image from 'next/image'
import React from 'react'

function CategoryCard(props: any) {
  return (
    <div 
        data-aos="flip-up"
        data-aos-once="true"
        data-aos-offset="-70"
        className='flex flex-col rounded-3xl lg:rounded-none overflow-hidden lg:flex-row items-stretch justify-center bg-backgroundWhite text-fontPurple '
    >
        <Image
            className='w-full lg:w-1/2'
            src={props.Src}
            alt={props.Alt}
            width={200}
            height={200}
        />
        <span className='flex flex-col justify-center p-6 gap-8 lg:w-1/2 description'>
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
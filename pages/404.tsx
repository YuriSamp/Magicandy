import Head from 'next/head'
import Image from 'next/image'
import NotFound from 'public/page404.png'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <main className=' bgMovingEffect min-h-[calc(100vh-316px)] flex justify-center items-center'>
        <div className='bg-backgroundWhite flex items-center border-2 border-fontPurple rounded-lg'>
          <div className='flex flex-col items-center px-20'>
            <p className='font-kalam text-2xl'>Não achou o que estava procurando?</p>
            <div className='flex items-center'>
              <Link
                className='flex items-center justify-center gap-2 cursor-pointer text-lg p-2  mx-auto radius-5 ring-2 my-[1rem] ring-backgroundPink font-kalam rounded-lg select-none'
                href='../produtos'
              >
                <AiOutlineArrowLeft />Ver produtos
              </Link>
            </div>
          </div>
          <div className='flex flex-col flex-wrap-reverse'>
            <Image src={NotFound} alt='foto de garotos olhando atráves de donuts' className='rounded-r-lg' width={600} height={400} />
          </div>
        </div>
      </main>
    </>
  )
}


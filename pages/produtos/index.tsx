import React, { useEffect, useState } from 'react'
import Card from '@ui/Card'
import Search from 'components/Search/Search'
import Product from 'models/product';
import dbConnect from 'services/connect';
import { DataBase } from 'interface/ServerSideDataBase'
import Head from 'next/head'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'


export async function getStaticProps() {
  dbConnect.connect()
  const database = await Product.find();
  dbConnect.disconnect()
  return {
    props: { db: JSON.parse(JSON.stringify(database)) }
  }
}


function Produtos({ db }: DataBase) {
  const [name, setName] = useState('')
  const [type, setType] = useState('Todos')
  const [dbFiltrado, setDbFiltrado] = useState(db)
  const [Page, setPage] = useState(1)

  function Compare(string1: string, string2: string) {
    const titleNormalized = string1.toLocaleLowerCase()
    const searchValueNormalized = string2.toLowerCase()
    return titleNormalized.includes(searchValueNormalized)
  }

  useEffect(() => {
    if (type === 'Todos' && name === '') {
      setDbFiltrado(db)
    }

    if (type !== 'Todos' && name === '') {
      const dbFiltrado = db.filter(item => item.Category?.toLowerCase() === type.toLowerCase())
      setDbFiltrado(dbFiltrado)
    }

    if (type === 'Todos' && name !== '') {
      const dbSearch = db.filter(item => Compare(item.ProductTitle, name))
      setDbFiltrado(dbSearch)
    }

    if (type !== 'Todos' && name !== '') {
      const dbFiltrado = db.filter(item => item.Category?.toLowerCase() === type.toLowerCase())
      const dbSearch = dbFiltrado.filter(item => Compare(item.ProductTitle, name))
      setDbFiltrado(dbSearch)
    }
  }, [type, name])


  const onChangeHandler = (event: any) => {
    setName(event.target.value)
  }

  function handleQuantity(number: number, operation: string) {
    const rangeOfSum = number >= 1 && number < 2
    const rangeOfSubtraction = number > 1 && number <= 2
    if (operation === 'SUM' && rangeOfSum) {
      setPage(number + 1)
    }

    if (operation === 'SUBTRACTION' && rangeOfSubtraction)
      setPage(number - 1)
  }


  return (
    <>
      <Head>
        <title>MagiCandy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className='flex flex-col items-center min-h-screen w-full min-w-[320px]  bg-backgroundPink border-b-2 border-fontPurple'>
        <h1 className='text-4xl text-white font-kalam mt-6'>Produtos</h1>

        <div className='flex justify-center w-full flex-wrap gap-6 py-6'>
          <Search onChangeHandler={onChangeHandler} />

          {/* //TODO  incluir rounded no dropdown */}
          <select id='filterSelect' className='py-2 px-4 w-[229px] text-center rounded-lg ring-fontPurple ring-2 bg-white'
            onChange={e => setType(e.target.value)}>
            <option>Todos</option>
            <option>Bolos</option>
            <option>Donuts</option>
            <option>Brownies</option>
            <option>Mousses</option>
            <option>Tapiocas</option>
            <option>Cupcakes</option>
          </select>
        </div>
        <section className="flex grow text-black flex-col h-full gap-x-42 lg:flex-row lg:px-48 gap-16 md:gap-8 px-2 pt-16 pb-8  items-center justify-evenly flex-wrap">
          {
            dbFiltrado.map( (product, index) => {
              let minIndex: number = (Page * 12) - 12
              let maxIndex: number = (Page * 12) - 1
              if (index >= minIndex && index <= maxIndex) {
              return ( <Card
                  key={product._id}
                  _id={product._id}
                  Src={product.Src}
                  Alt={product.Alt}
                  ProductTitle={product.ProductTitle}
                  ProductPrice={product.ProductPrice}
                />)
              }
            })
          }
        </section>
        <div className='flex items-center gap-8 pb-8 '>
          <button
            className=' flex items-center justify-center gap-2 min-w-[110px] cursor-pointer text-lg p-2  mx-auto radius-5 ring-2 my-[1rem] ring-fontPurple bg-backgroundWhite font-kalam rounded-lg select-none'
            onClick={() => handleQuantity(Page, "SUBTRACTION")}
          >
            <AiOutlineArrowLeft />
            Voltar
          </button>
          <p className='font-kalam text-xl'>Página {Page} / 2</p>
          <button
            className='flex items-center justify-center gap-2 min-w-[110px] cursor-pointer text-lg p-2  mx-auto radius-5 ring-2 my-[1rem] ring-fontPurple bg-backgroundWhite  font-kalam rounded-lg select-none'
            onClick={() => handleQuantity(Page, "SUM")}
          >
            Avançar
            <AiOutlineArrowRight />
          </button>
        </div>
      </main>
    </>
  )
}

export default Produtos
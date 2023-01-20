import React, { useState } from 'react'
import Footer from '@ui/Footer'
import Navbar from '@ui/Navbar'
import Card from '@ui/Card'
import db from 'data/db.json'
import Search from 'components/Search/Search'
import { IProduto } from 'interface/IProduto'
import Product from 'models/product';
import dbConnect from 'services/connect';

//TODO deixar com background white para padronizar

type Props = {
  db: IProduto[]
}

export async function getServerSideProps() {
  dbConnect.connect()
  const database = await Product.find();
  dbConnect.disconnect()
  return {
    props: { db: JSON.parse(JSON.stringify(database)) }
  }
}


function Produtos({ db }: Props) {
  console.log(db)

  const onChangeHandler = (event: any) => {
    setName(event.target.value)
  }

  const [name, setName] = useState('')
  const [type, setType] = useState('Todos')

  // const dbFiltrado = db.filter(item => {
  //   const titleNormalized = item.ProductTitle.toLocaleLowerCase()
  //   const searchValueNormalized = name.toLowerCase()
  //   return titleNormalized.includes(searchValueNormalized)
  // })

  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center min-h-screen w-full min-w-[320px]  bg-backgroundPink'>
        <h1 className='text-4xl text-white font-kalam mt-6'>Produtos</h1>

        <div className='flex justify-center w-full flex-wrap gap-6 py-6'>
          <Search onChangeHandler={onChangeHandler} />

          {/* //TODO  incluir rounded no dropdown */}
          <select id='filterSelect' className='py-2 px-4 w-[229px] text-center rounded-lg ring-fontPurple ring-2 bg-white'
            onChange={e => setType(e.target.value)}>
            <option>Todos</option>
            <option>Bolo</option>
            <option>Torta</option>
            <option>Donut</option>
          </select>
        </div>
        <section className="flex grow text-black flex-col h-full gap-x-42 lg:flex-row lg:px-48 gap-16 md:gap-8 px-2 py-16 border-b-2 border-fontPurple items-center justify-evenly flex-wrap">
          {
            db.map(product => (
              <Card
                key={product._id}
                _id={product._id}
                Src={product.Src}
                Alt={product.Alt}
                ProductTitle={product.ProductTitle}
                ProductPrice={product.ProductPrice}
              />
            ))
          }
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Produtos
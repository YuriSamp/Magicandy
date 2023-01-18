import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Card from '../components/Card/Card'
import db from '../data/db.json'
import Search from '../components/Search/Search'

function Produtos() {
  const onChangeHandler = (event:any) => {
    console.log(event.target.value)
  }

  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center min-h-screen w-full min-w-[320px]  bg-backgroundPink'>
        <h1 className='text-4xl text-white font-kalam mt-6'>Produtos</h1>
        
        <div className='flex justify-center w-full flex-wrap gap-6 py-6'>
          <Search onChangeHandler={onChangeHandler} />

          {/* //TODO  incluir rounded no dropdown */}
          <select id='filterSelect' className='py-2 px-4 w-[229px] text-center rounded-lg ring-fontPurple ring-2 bg-white'>
              <option>Duvida</option>
              <option>Sugestão</option>
              <option>Reclamação</option>
              <option>Outros</option>
          </select>
        </div>
        <section className="flex grow text-black flex-col h-full gap-x-42 lg:flex-row lg:px-48 gap-16 md:gap-8 px-2 py-16 border-b-2 border-fontPurple items-center justify-evenly flex-wrap">
          {
            db.map(product => (
              <Card
                key={product.id}
                id={product.id}
                src={product.src}
                alt={product.alt}
                productTitle={product.productTitle}
                productPrice={product.productPrice}
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
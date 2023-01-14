import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Card from '../components/Card/Card'
import db from '../data/db.json'

//TODO Componente busca

function Produtos() {
  return (
    <>
      <Navbar />
      <main className='flex flex-col min-h-screen w-full min-w-[320px]  bg-backgroundPink'>
        <section className="flex grow text-black flex-col h-full gap-x-42 lg:flex-row lg:px-48 gap-16 md:gap-8 px-2 py-16 border-b-2 border-[#8c52ff] items-center justify-evenly flex-wrap">
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
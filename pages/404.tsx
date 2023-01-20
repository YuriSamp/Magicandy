import React from 'react'
import Button from '../components/Button/Button'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default function Custom404() {
  return (
    <>
      <Navbar />
      <main className='bg-red-500'>
        <div className='p-36'>
          <Button value='Voltar' type='LINK' href='../' />
        </div>
      </main>
      <Footer />
    </>
  )
}


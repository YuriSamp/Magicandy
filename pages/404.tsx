import React from 'react'
import Button from '@ui/Button'
import Footer from '@ui/Footer'
import Navbar from '@ui/Navbar'

export default function Custom404() {
  return (
    <>
      <Navbar />
      <main className='bg-red-500'>
        <div className='px-48 py-36'>
          <Button value='Voltar' type='LINK' href='../' />
        </div>
      </main>
      <Footer />
    </>
  )
}


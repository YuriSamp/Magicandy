import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function Contato() {
  return (
    <>
      <Navbar />
      <main>
        <form>
          <div className=''>
            <label htmlFor=''>Nome</label>
            <input type='text' id='' />
            <span></span>
          </div>
          <div>
            <label htmlFor=''>Email</label>
            <input type='text' id='' />
            <span></span>
          </div>
          <div>
            <label htmlFor=''>Telefone</label>
            <input type='text' id='' />
            <span></span>
          </div>
          <div>
            <label htmlFor=''>Motivo do contato</label>
            <select id=''>
              <option>Duvida</option>
              <option>Sugestão</option>
              <option>Reclamação</option>
              <option>Outros</option>
            </select>
            <span></span>
          </div>
          <div>
            <label htmlFor=''></label>
            <textarea id='' />
            <span></span>
          </div>
        </form>
        <div>

        </div>
      </main>
      <Footer />
    </>
  )
}

export default Contato
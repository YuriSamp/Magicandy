import { useRouter } from 'next/router'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import db from '../../data/db.json'
import { IProduto } from '../../utils/IProduto'
import { FormataBRL } from '../../utils/ConvertCurrency'
import Image from 'next/image'
import FormularioProduto from '../../components/FormularioProduto/Formulario'

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  const array = db.filter(item => item.id === Number(id))[0]

  return (
    <>
      <Navbar />
      <main className='bg-backgroundPink flex justify-center items-center p-12 py-16'>
        <div className='bg-white text-black rounded-lg drop-shadow-xl border-2 border-fontPurple p-4 max-w-[1000px]'>
          <div className='flex'>
            <Image src={array.src} alt={array.alt} width={500} height={400} className='rounded-lg'></Image>
            <div className='px-8 flex flex-col'>
              <h1 className='text-2xl text-fontPurple font-kalam' >{array.productTitle}</h1>
              <h3 className='text-lg'>{FormataBRL(array.productPrice)}</h3>
              <FormularioProduto />
            </div>
          </div>
          <p>{array.description}</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Post
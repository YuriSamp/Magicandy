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
        <div className='bg-white text-black rounded-lg drop-shadow-xl border-2 border-fontPurple p-2 max-w-[1000px]'>

          <div className='flex flex-col md:flex-row justify-between'>
            <Image src={array.src} alt={array.alt} width={500} height={400} className='rounded-lg w-full grow md:w-[50%]'></Image>

            <div className='px-8 flex flex-col'>
            	<h1 className='text-2xl my-6 text-fontPurple font-kalam text-center' >
					{array.productTitle}
				</h1>
				<div className='self-center'>
					<span className='text-xl text-start mb-[1rem] font-semibold'>
						{`Preço: ${FormataBRL(array.productPrice)}`}
					</span>

					<FormularioProduto />
				</div>
            </div>
          </div>
          <p className='mt-2 text-justify indent-4 text-xl p-4'>{array.description}</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Post
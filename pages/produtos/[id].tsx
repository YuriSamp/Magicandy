import { useRouter } from 'next/router'
import Footer from '@ui/Footer'
import Navbar from '@ui/Navbar'
import { FormataBRL } from 'utils/ConvertCurrency'
import Image from 'next/image'
import FormularioProduto from 'components/FormularioProduto/Formulario'
import { IProduto } from 'interface/IProduto'

//TODO Revisar

type Props = {
  db: IProduto[]
}

const Post = ({ db }: Props) => {
  console.log(db)
  const router = useRouter()
  const { id } = router.query
  // const array = db.filter(item => item._id === id)

  return (
    <>
      <Navbar />
      <main className='bg-backgroundPink flex justify-center items-center p-12 py-16'>
        {/* {array.map(item => (
          <div className='bg-white text-black rounded-lg drop-shadow-xl border-2 border-fontPurple p-2 max-w-[1000px]' key={item._id}>
            <div className='flex flex-col md:flex-row justify-between'>
              <Image src={item.Src} alt={item.Alt} width={500} height={400} className='rounded-lg w-full grow md:w-[50%]'></Image>
              <div className='px-8 flex flex-col'>
                <h1 className='text-2xl my-6 text-fontPurple font-kalam ' >
                  {item.ProductTitle}
                </h1>
                <div className='self-center'>
                  <span className='text-xl text-start mb-[3rem] font-semibold '>
                    {`Preço: ${FormataBRL(item.ProductPrice)}`}
                  </span>
                  <FormularioProduto Price={item.ProductPrice} _id={item._id} Name={item.ProductTitle} Imagem={item.Src} />
                </div>
              </div>
            </div>
            <p className='mt-2 text-justify indent-4 text-xl p-4'>{item.Description}</p>
          </div>
        ))} */}
      </main>
      <Footer />
    </>
  )
}

export default Post
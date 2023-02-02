import { FormataBRL } from 'utils/ConvertCurrency'
import Image from 'next/image'
import FormularioProduto from 'components/FormularioProduto/Formulario'
import dbConnect from 'services/connect'
import Product from 'models/product'
import { DataBase } from 'interface/ServerSideDataBase'
import Head from 'next/head'
import { GetServerSidePropsContext } from 'next'
import { IProduto } from 'interface/IProduto'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const id = (context.query.id)
    dbConnect.connect()
    const database = await Product.find({ ProductTitle: `${id}` });
    dbConnect.disconnect()
    return {
      props: { db: JSON.parse(JSON.stringify(database)) }
    }
  } catch {
    return {
      notFound: true
    };
  }
}

const UniqueProduct = (db: DataBase) => {
  const arr: IProduto[] = Object.values(db)[0]

  return (
    <>
      <Head>
        <title>MagiCandy</title>
      </Head>

      <main className='bg-backgroundPink flex flex-col justify-center items-center p-12 py-16'>
        <div className=''>
          <Link
            href='./'
            className='flex items-center justify-center self-start gap-2 min-w-[110px] cursor-pointer text-lg p-2  mx-auto radius-5 ring-2 my-[1rem] ring-fontPurple bg-backgroundWhite font-kalam rounded-lg select-none button-secondary'
          >
            <AiOutlineArrowLeft />
            Voltar para produtos
          </Link>
        </div>

        {
        arr.map(item => (
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
        ))
        }
      </main>
    </>
  )
}

export default UniqueProduct
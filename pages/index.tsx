import Head from 'next/head'
import Card from '@ui/Card'
import dbConnect from 'services/connect'
import Product from 'models/product'
import { DataBase } from 'interface/ServerSideDataBase'


export async function getServerSideProps() {
  dbConnect.connect()
  const database = await Product.find();
  dbConnect.disconnect()
  const DataBaseSerialize = JSON.parse(JSON.stringify(database))
  const db = DataBaseSerialize.sort(() => 0.5 - Math.random()).splice(0, 3);
  return {
    props: { db }
  }
}

export default function Home({ db }: DataBase) {
  return (
    <>
      <Head>
        <title>MagiCandy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className='flex flex-col min-h-screen w-full min-w-[320px]  bg-backgroundPink'>
        <div className='flex bg-home-banner p-1 bg-[60%] md:bg-[length:100%_100%] lg:bg-[length:100%_120%] bg-no-repeat bg-cover min-h-[300px] md:h-[400px] lg:h-[500px] items-center justify-center border-b-2 border-fontPurple'>
          <h2 className='text-pink-900 z-10 mt-0 text-[2rem] lg:text-[55px] font-kalam relative 
          before:block before:absolute before:inset-0 before:opacity-30 before:z-0 before:bg-white
          '>A magia da felicidade <br className='hidden md:inline-block' />
            <span className='md:ml-32'>para adoçar seu dia!</span> </h2>
        </div>

        <section className="flex grow text-black flex-col h-full gap-x-42 lg:flex-row lg:px-48 gap-16 md:gap-8 px-2 py-16 border-b-2 border-[#8c52ff] items-center justify-evenly flex-wrap">
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
    </>
  )
}

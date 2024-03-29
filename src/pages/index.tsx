import Head from "next/head";
import CategoryCard from 'src/components/CategoryCard';
import Link from "next/link";
import CardTestimony from 'src/components/CardTestimony/CardTestimony';
import cards from '../data/HomeCard.json'
import testimony from '../data/testimony.json'
import dynamic from "next/dynamic";
import unicornImg from "public/homeunicorn.png";

const DynamicHomeVideo = dynamic(() => import('../components/HomeVideo'), { ssr: false })

export default function Home() {

  return (
    <>
      <Head>
        <title>MagiCandy</title>
      </Head>
      <main className="flex flex-col items-center gap-8 min-h-screen w-full min-w-[320px]  overflow-x-hidden pb-10 bgMovingEffect border-b-2 border-fontPurple">
        <DynamicHomeVideo UnicornImg={unicornImg} />
        <section className="max-w-[80%]">
          <Link href="/produtos">
            <div
              className="flex flex-col gap-8 lg:gap-0 rounded-3xl overflow-hidden items-center grid-cards w-fit lg:min-w-[900px]"
              title="Ver produtos"
            >
              {cards.map((item, index) =>
                <CategoryCard
                  productTitle={item.productTitle}
                  Src={item.Src}
                  Alt=""
                  key={index}
                >
                  {item.Text}
                </CategoryCard>
              )}
            </div>
          </Link>
        </section>

        <section className="flex gap-4  border-2 border-t-fontPurple border-b-fontPurple border-r-transparent border-l-transparent flex-col bg-backgroundWhite py-[90px] p-6 font-kalam text-fontPurple w-full wavy">
          <h2 className="text-center text-4xl">Depoimentos</h2>
          <div className="flex flex-col items-center  gap-12  xl:flex-row xl:items-stretch justify-evenly">
            {testimony.map((item, index) =>
              <CardTestimony
                Name={item.Name}
                Description={item.Description}
                Img={item.Img}
                key={index}
              />
            )}
          </div>
        </section>
      </main>
    </>
  );
}

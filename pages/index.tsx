import Head from "next/head";
import { useEffect } from "react";
import CategoryCard from "@ui/CategoryCard";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import CardTestimony from "@ui/CardTestimony/CardTestimony";
import cards from '../data/HomeCard.json'
import testimony from '../data/testimony.json'
import HomeVideo from '@ui/HomeVideo';

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>MagiCandy</title>
      </Head>
      <main className="flex flex-col items-center gap-8 min-h-screen w-full min-w-[320px]  bg-backgroundPink overflow-x-hidden pb-10 bgMovingEffect">
        <HomeVideo />
        <section className="max-w-[80%]">
          <Link href="/produtos">
            <div
              className="rounded-3xl overflow-hidden items-center grid-cards min-w-[900px]"
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
          <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row justify-evenly">
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

import Head from "next/head";
import Card from "@ui/Card";
import dbConnect from "services/connect";
import Product from "models/product";
import { DataBase } from "interface/ServerSideDataBase";
import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import unicornImg from "public/unicorn2.png";
import CategoryCard from "@ui/CategoryCard";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import CardTestimony from "@ui/CardTestimony/CardTestimony";
import cards from '../data/HomeCard.json'
import testimony from '../data/testimony.json'

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>MagiCandy</title>
      </Head>
      <main className="flex flex-col items-center gap-8 min-h-screen w-full min-w-[320px]  bg-backgroundPink overflow-x-hidden pb-10 bgMovingEffect">
        <section className="h-[calc(100vh_-_146px)] w-screen overflow-hidden relative flex items-center justify-center">
          <div className="opacity-90 w-full h-full">
            {domLoaded && (
              <video
                className="object-fill h-full w-full overflow-hidden"
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
              >
                <source src="/magicandy.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          <div className="flex flex-col justify-center items-center gap-6 max-w-[900px] text-backgroundWhite font-kalam absolute backdrop-blur-sm bg-black/30 border-none rounded-xl p-8">
            <div className="flex items-center justify-center gap-6">
              <Image
                className="w-[80px]"
                src={unicornImg}
                width={45}
                height={45}
                alt=""
              />
              <h2 className="text-6xl">Magicandy</h2>
            </div>
            <p className="text-2xl text-justify teste">
              Criada em 2023, a partir de um sonho e um compromisso, de fazer
              nossos produtos com amor e qualidade, para que em cada fatia, cada
              mordida e cada suspiro, possamos compartilhar com vocês a magia da
              felicidade.
            </p>
          </div>
        </section>

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

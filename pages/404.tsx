import Head from "next/head";
import Image from "next/image";
import NotFound from "public/page404.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <main className=" bgMovingEffect flex min-h-[calc(100vh-316px)] items-center justify-center p-12">
        <div className="flex flex-col  rounded-lg border-2 border-fontPurple items-stretch bg-backgroundWhite md:flex-row">
          <div className="flex flex-col items-center gap-4 justify-center text-center p-6 md:p-12 px-20">
            <p className="font-kalam text-2xl">
              Não achou o que estava procurando?
            </p>
            <div className="flex items-center">
              <Link
                className="radius-5 button-default mx-auto my-[1rem] flex cursor-pointer select-none  items-center justify-center gap-2 rounded-lg p-2 font-kalam text-lg ring-2 ring-backgroundPink"
                href="../produtos"
              >
                <AiOutlineArrowLeft />
                Ver produtos
              </Link>
            </div>
          </div>
          <Image
            src={NotFound}
            alt="foto de garotos olhando atráves de donuts"
            className="rounded-r-lg"
            width={600}
            height={400}
          />
        </div>
      </main>
    </>
  );
}

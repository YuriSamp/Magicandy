import Image from 'next/image';

export default function HomeVideo({ UnicornImg }: any) {

  return (
    <section className="h-[calc(100vh_-_314px)] md:h-[calc(100vh_-_206px)] lg:h-[calc(100vh_-_146px)] w-screen overflow-hidden relative flex items-center justify-center">

      <div className="opacity-90 w-full h-full">
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
      </div>

      <div className="flex flex-col justify-center items-center gap-6 max-w-[900px] text-backgroundWhite font-kalam absolute backdrop-blur-sm bg-black/30 border-none rounded-xl p-4 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Image
            className="w-[60px] md:w-[80px]"
            src={UnicornImg}
            width={45}
            height={45}
            alt=""
          />
          <h2 className="text-4xl md:text-6xl">Magicandy</h2>
        </div>

        <p className="text-xl md:text-2xl text-justify teste">
          Criada em 2023, a partir de um sonho e um compromisso de fazer
          nossos produtos com amor e qualidade, para que em cada fatia, cada
          mordida e cada suspiro, possamos compartilhar com vocês a magia da
          felicidade.
        </p>
      </div>

    </section>
  )
}

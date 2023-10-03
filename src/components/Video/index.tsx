import Image from "next/image";

export default function Video() {
  return (
    <section className="mt-32">
      <div className="h-[554px] relative">
        <Image
          className="z-0 object-cover"
          src="/images/casa.jpg"
          alt="Imagem de sala organizada"
          fill
          sizes="100%"
          loading="lazy"
        />

        <div className="z-10 absolute inset-0 bg-fundo flex flex-col justify-center items-center gap-12">
          <p className="z-10 text-white text-center text-3xl leading-10 max-w-2xl">
            Elaboramos soluções personalizadas para a organização da sua casa ou empresa
          </p>

          <p className="z-10 text-white text-center text-3xl leading-10 max-w-2xl">
            Ajudando você a encontrar tranquilidade, equilíbrio e espaço para desfrutar das coisas mais preciosas da vida
          </p>
        </div>
      </div>
    </section>
  )
}
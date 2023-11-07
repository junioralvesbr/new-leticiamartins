import LinkBuntton from "@/components/LinkButton";
import { whatsAppLink } from "@/components/Whatsapp";
import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <header>
        <section className="flex flex-col gap-6 p-4 pt-5 mx-auto md:pt-10 md:flex-row md:justify-center md:items-center md:max-w-7xl">
          <article className="flex flex-col gap-5">

            <p className="text-stone-500 uppercase">
              Ola !!!
            </p>

            <h1 className="text-stone-800 text-4xl max-w-md lg:text-6xl xl:text-7xl">
              Eu sou a Leticia Martins
            </h1>

            <p className="text-stone-500 text-lg">
              Profissional de Organização Residencial e Comercial
            </p>

            <LinkBuntton href={whatsAppLink}>
              Entre em contato comigo
            </LinkBuntton>
          </article>

          <div className="w-full h-full relative pb-[56.25%] rounded-lg"><iframe src="https://streamable.com/e/w80woi?autoplay=1&nocontrols=1" width="100%" height="100%" allowFullScreen allow="autoplay"
            className="w-full h-full absolute inset-0 overflow-hidden rounded-lg"></iframe></div>
        </section>
      </header>

      <main>
        <section id="aboutme" className="flex flex-wrap justify-center items-center py-10">

          <article className="max-w-md flex flex-col items-center lg:items-start">

            <h2 className="uppercase font-bold text-fifth-color text-3xl px-2">
              Apaixonada por organização
            </h2>

            <p className="mt-5 px-4">
              Desde pequena sempre tive meus pertences bem arrumados e cuidados, gostava de cuidar da casa para ajudar minha mãe.
            </p>

            <p className="mt-5 px-4">
              Ao longo da vida, casei e tive 2 filhos, numa fase da minha vida, em que eu não estava trabalhando fora, decidi que gostaria de retornar ao mercado de trabalho.
            </p>

            <figure className="mt-5">
              <Image
                className="rounded-xl w-auto h-auto"
                src='/images/aboutme1.jpg'
                alt="Foto do perfil Leticia Martins Personal Organizer"
                width={400}
                height={400}
              />
            </figure>
          </article>

          <article className="max-w-md flex flex-col items-center lg:items-start lg:ml-10">
            <figure className="mt-5">
              <Image
                className="rounded-xl w-auto h-auto"
                src='/images/aboutme2.jpg'
                alt="Foto do perfil Leticia Martins Personal Organizer"
                width={300}
                height={300}
              />
            </figure>

            <p className="mt-5 px-4">
              Foi então que pesquisando descobri que meu talento poderia se tornar uma profissão.
            </p>

            <p className="mt-5 px-4">
              Busquei me profissionalizar em <em>personal organizer</em> e atuo desde 2017 em <strong>Maringá - PR</strong> oferecendo o melhor serviço de organização de ambientes, sempre com o apoio e incentivo de minha familia.
            </p>

          </article>
        </section>
      </main>

    </>
  )
}
import LinkBuntton from '@/components/LinkButton'
import PagesWorks from '@/components/PagesWorks'
import { whatsAppLink } from '@/components/Whatsapp'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Pós Mudança - Leticia Martins Personal Organizer',
  alternates: {
    canonical: 'https://www.leticiamartins.com.br/posmudanca',
  },
}

const data = [
  {
    image: '/images/equipe-mudanca.png',
    alt: 'Foto de equipe',
    title: 'Conte com a minha equipe',
    text: 'Ao contar com a ajuda da minha equipe de personal organizer, você terá alguém especializado em organização que irá planejar cada etapa da mudança, desde a seleção dos itens a serem levados até a organização final na nova casa.',
    reverse: false,
  },
  {
    image: '/images/cozinha-mudanca.png',
    alt: 'foto de cozinha.mudanca',
    title: 'Nosso trabalho',
    text: 'Isso inclui otimizar o espaço nos armários, criar sistemas de organização eficientes e encontrar soluções práticas para armazenar seus pertences. Além disso, oferecemos orientações sobre como manter a organização a longo prazo, o que facilitará sua adaptação ao novo lar.',
    reverse: true,
  },
  {
    image: '/images/quarto-mudanca.png',
    alt: 'foto de quarto-mudanca',
    title: 'Mudança organizada',
    text: 'Estamos prontos para te oferecer uma experiência única e exclusiva, com todo conforto e tranquilidade que você e sua familia merece.',
    reverse: false,
  },
]

export default function Home() {
  return (
    <>
      <header>
        <section className="flex flex-col gap-6 p-4 pt-5 mx-auto md:pt-10 md:flex-row md:justify-center md:items-center">
          <div className="flex flex-col gap-5">
            <p className="text-stone-500 uppercase">Pós Mudança</p>

            <p className="text-stone-800 text-4xl max-w-md lg:text-5xl">
              Curta o seu novo lar, e deixe a sua mudança comigo.
            </p>

            <h1 className="text-stone-500 text-lg">
              Minha equipe é especializada em fazer <br /> pós mudança de forma
              rápida e sem estresse.
            </h1>

            <LinkBuntton href={whatsAppLink} target="_blank">
              Entre em contato comigo
            </LinkBuntton>
          </div>

          <picture>
            <Image
              src="/images/sala.webp"
              alt="Imagem de sala organizada da Leticia Martins"
              width={800}
              height={600}
              className="rounded-lg"
              priority={true}
            />
          </picture>
        </section>
      </header>

      <hr style={{ marginTop: '50px' }} />

      <main style={{ marginTop: '70px' }}>
        <PagesWorks data={data} />
      </main>
    </>
  )
}

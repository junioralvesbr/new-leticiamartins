import LinkBuntton from '@/components/LinkButton'
import PagesWorks, { DataType } from '@/components/PagesWorks'
import { whatsAppLink } from '@/components/Whatsapp'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Organização Residencial - Leticia Martins Personal Organizer',
  alternates: {
    canonical: 'https://www.leticiamartins.com.br/residencial',
  },
}

const data: DataType[] = [
  {
    image: '/images/closet.jpg',
    alt: 'Foto do closet',
    title: 'Quartos e Closets',
    text: 'Um quarto organizado cria um ambiente mais tranquilo para relaxar e dormir, reduz o estresse causado pela desordem, facilita a limpeza, além de permitir que você encontre facilmente o que precisa, economizando tempo no dia a dia.',
    reverse: false,
  },
  {
    image: '/images/infantil.webp',
    alt: 'foto do quarto infantil',
    title: 'Quartos Infantis e Brinquedoteca',
    text: 'As crianças perdem suas roupas e brinquedos em um piscar de olhos, então não é de admirar que seus quartos e brinquedoteca fiquem bagunçados. Podemos começar com a organização e restaurar a ordem em seus quartos para que eles possam encontrar o que precisam.',
    reverse: true,
  },
  {
    image: '/images/cozinha.jpg',
    alt: 'foto da cozinha',
    title: 'Cozinhas e despensas',
    text: 'Provavelmente um dos ambientes mais usados em sua casa, a cozinha se torna o local de encontro para sua família e para o preparo das refeições. Ter tudo organizado proporciona momentos incriveis ao redor da mesa.',
    reverse: false,
  },
  {
    image: '/images/banheiro.jpg',
    alt: 'foto do banheiro',
    title: 'Banheiros e Lavanderias',
    text: 'Organizar esses ambientes facilitam a rotina e manutenção da casa, economiza tempo, cria um ambiente agradável, contribui para sensação de ordem e limpeza, promovendo o bem estar e redução do estresse.',
    reverse: true,
  },
]

export default function Home() {
  return (
    <>
      <header>
        <section className="flex flex-col gap-6 p-4 pt-5 mx-auto md:pt-10 md:flex-row md:justify-center md:items-center">
          <div className="flex flex-col gap-5">
            <p className="text-stone-500 uppercase">Organização Residencial</p>

            <p className="text-stone-800 text-4xl max-w-md lg:text-5xl">
              A organização traz paz e tranquilidade
            </p>

            <h1 className="text-stone-500 text-lg">
              Eu e minha equipe estamos prontas para organizar <br /> a sua casa
              e te ajudar nas rotinas do dia a dia.
            </h1>

            <LinkBuntton href={whatsAppLink} target="_blank">
              Entre em contato comigo
            </LinkBuntton>
          </div>

          <picture>
            <Image
              src="/images/residencial-hero.jpg"
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

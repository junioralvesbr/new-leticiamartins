import LinkBuntton from '@/components/LinkButton'
import PagesWorks from '@/components/PagesWorks'
import { whatsAppLink } from '@/components/Whatsapp'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Organização Residencial - Leticia Martins Personal Organizer',
  alternates: {
    canonical: 'https://www.leticiamartins.com.br/residencial',
  },
}

const data = [
  {
    image: '/images/closet.jpg',
    title: 'Quartos e Closets',
    text: 'Essas áreas começam com pouco volume, mas rapidamente se tornam o lugar “fácil” para colocar as coisas quando você não sabe mais o que fazer com elas. Vamos organizar tudo com toda praticidade e facilidade para seu dia a dia.',
    reverse: false,
  },
  {
    image: '/images/infantil.webp',
    title: 'Quartos Infantis e Brinquedoteca',
    text: 'As crianças perdem suas roupas e brinquedos em um piscar de olhos, então não é de admirar que seus quartos e salas de jogos fiquem bagunçados. Podemos começar com a organização e restaurar a ordem em seus quartos para que eles possam encontrar o que precisam.',
    reverse: true,
  },
  {
    image: '/images/cozinha.jpg',
    title: 'Cozinhas e despensas',
    text: 'Provavelmente um dos cômodos mais usados em sua casa, a cozinha se torna um local de encontro para sua família e para o preparo das refeições. Colocar o foco nessas áreas pode não apenas ajudar a restaurar a ordem e reduzir o estresse, mas também pode ajudá-lo a economizar dinheiro.',
    reverse: false,
  },
  {
    image: '/images/banheiro.jpg',
    title: 'Banheiros e Lavanderias',
    text: ' Estes ambientes pequenos podem abrir a porta para um mundo de bagunça e desordem, por isso ao organizá-los você terá toda beleza e funcionalidadede para você, facilitando a limpeza e manutenção do dia a dia da casa.',
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
              A organização traz liberdade
            </p>

            <h1 className="text-stone-500 text-lg">
              Eu e minha equipe estamos prontas para organizar <br /> a sua casa
              e te ajudar nas rotinas do dia dia.
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

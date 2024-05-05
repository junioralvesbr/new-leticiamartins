import LinkBuntton from '@/components/LinkButton'
import PagesWorks, { DataType } from '@/components/PagesWorks'
import { whatsAppLink } from '@/components/Whatsapp'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Organização Comercial - Leticia Martins Personal Organizer',
  alternates: {
    canonical: 'https://www.leticiamartins.com.br/comercial',
  },
}

const data: DataType[] = [
  {
    image: '/images/almoxarifado.png',
    alt: 'Foto de almoxarifado',
    title: 'Estoques e almoxarifados',
    text: 'A gestão de estoques e almoxarifados potencializam a rentabilidade de qualquer organização. Por isso é fundamental mantê-los organizados afim de que a empresa sempre esteja abastecida e não tenha custos desnecessários com produtos e insumos. A organização destes setores tem por objetivo aumentar a produtividade e a agilidade no manuseio dos produtos pelos colaboradores.',
    reverse: false,
  },
  {
    image: '/images/atelie.jpg',
    alt: 'foto de ateliê',
    title: 'Ateliê',
    text: 'O ateliê é aquele cantinho agradável onde podemos nos refugiar no mundo da arte. E ter um ateliê organizado é muito mais prazeroso para trabalhar e produzir lindas peças. Pois o que realmente importa é que esse local seja organizado para que você possa trabalhar com tranquilidade e praticidade.',
    reverse: true,
  },
  {
    image: '/images/loja.jpg',
    alt: 'foto de loja comercial',
    title: 'Loja comercial',
    text: 'Uma loja organizada com os produtos bem dispostos é uma ferramenta importante para atrair e proporcionar conforto e bem estar para os seus clientes. A organização pode chamar a atenção dos consumidores, melhorar seu atendimento, facilitar o trabalhos dos seus colaboradores e consequentemente aumentar as suas vendas.',
    reverse: false,
  },
]

export default function Home() {
  return (
    <>
      <header>
        <section className="flex flex-col gap-6 p-4 pt-5 mx-auto md:pt-10 md:flex-row md:justify-center md:items-center">
          <div className="flex flex-col gap-5">
            <p className="text-stone-500 uppercase">Organização Empresarial</p>

            <p className="text-stone-800 text-4xl max-w-md lg:text-5xl">
              Não é a falta de tempo que nos persegue, e sim a falta de
              organização.
            </p>

            <h1 className="text-stone-500 text-lg">
              Para cada minuto gasto na organização é <br /> uma hora ganho no
              seu dia.
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

      <main style={{ marginTop: '50px' }}>
        <PagesWorks data={data} />
      </main>
    </>
  )
}

import Image from 'next/image'

const logos = [
  'indio.png',
  'mais_cabelo.png',
  'casadavacina.png',
  'caopanheiro.jpg',
  'pipoquinha.jpg',
  'markbronze.png',
]

export default function Companies() {
  return (
    <section className='px-8 mt-20 md:mt-32" id="services"'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold">
          Alguns de nossos clientes atendidos
        </h2>

        <div className="flex flex-wrap gap-5 items-center justify-center py-10 lg:justify-between">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={`/images/companies/${logo}`}
              alt={`logo da empresa ${logo}`}
              width={150}
              height={150}
              className="object-scale-down"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

import { CheckCircle2, MapPin, Users2 } from 'lucide-react'

const data = [
  {
    icon: <CheckCircle2 size={28} />,
    text: "Mais de 6 anos de experiência"
  },
  {
    icon: <MapPin size={28} />,
    text: "Atendimento em Maringá-Pr e Região"
  },
  {
    icon: <Users2 size={28} />,
    text: "Equipe bem treinada e capacitada"
  },
]

export default function Cards() {
  return (
    <section className='pt-12'>
      <div className='grid grid-cols-1 gap-4 px-3 md:grid-cols-3 md:max-w-5xl md:mx-auto'>
        <div className='bg-stone-200 p-6 rounded-lg'>
          <CheckCircle2 size={28} />
          <p className='text-stone-500 mt-3'>
            Mais de 6 anos de experiência
          </p>
        </div>
        <div className='bg-stone-200 p-6 rounded-lg'>
          <MapPin size={28} />
          <p className='text-stone-500 mt-3'>
            Atendimento em Maringá-Pr e Região
          </p>
        </div>
        <div className='bg-stone-200 p-6 rounded-lg'>
          <Users2 size={28} />
          <p className='text-stone-500 mt-3'>
            Equipe bem treinada e capacitada
          </p>
        </div>
      </div>
    </section>
  )
}
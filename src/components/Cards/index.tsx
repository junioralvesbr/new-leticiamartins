import { CheckCircle2, MapPin, Users2 } from 'lucide-react'

export default function Cards() {
  return (
    <section className='pt-8 md:pt-12'>
      <div className='grid grid-cols-1 gap-4 px-3 md:grid-cols-3 md:max-w-6xl md:mx-auto'>
        <div className='bg-stone-200 p-8 rounded-lg'>
          <CheckCircle2 size={36} />
          <p className='text-stone-500 text-lg mt-3'>
            Mais de 6 anos de experiência
          </p>
        </div>
        <div className='bg-stone-200 p-8 rounded-lg'>
          <MapPin size={36} />
          <p className='text-stone-500 text-lg mt-3'>
            Atendimento em Maringá-Pr e Região
          </p>
        </div>
        <div className='bg-stone-200 p-8 rounded-lg'>
          <Users2 size={36} />
          <p className='text-stone-500 text-lg mt-3'>
            Equipe bem treinada e capacitada
          </p>
        </div>
      </div>
    </section>
  )
}
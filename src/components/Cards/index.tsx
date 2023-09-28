import { CheckCircle2, MapPin, Users2 } from "lucide-react";

export default function Cards() {
  return (
    <section className="grid gap-4 pt-8 sm:grid-cols-3 sm:grid-rows-1">

      <div className="bg-stone-100 p-6 rounded-lg">
        <CheckCircle2 size={36} />
        <p className="text-stone-500 text-lg mt-5">
          Mais de 6 anos de experiência como personal organizer
        </p>
      </div>

      <div className="bg-stone-100 p-6 rounded-lg">
        <MapPin size={36} />
        <p className="text-stone-500 text-lg mt-5">
          Atendimento em Maringá-PR e em toda região
        </p>
      </div>

      <div className="bg-stone-100 p-6 rounded-lg" >
        <Users2 size={36} />
        <p className="text-stone-500 text-lg mt-5">
          Equipe própria bem treinada e capacitada
        </p>
      </div>

    </section>
  )
}
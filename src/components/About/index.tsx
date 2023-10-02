import Image from "next/image";

export default function Aboult() {
  return (
    <section className="mt-12 px-3 md:mt-32">
      <article
        className="flex flex-col items-center gap-6 max-w-6xl mx-auto md:flex-row md:justify-between md:gap-20">
        <Image
          className="rounded-full"
          src='/images/about.jpg'
          alt="Foto de perfil de Laticia Martins"
          width={320}
          height={320}
        />

        <div>
          <p className="text-stone-600 text-xl">
            A organização vai além de apenas colocar objetos em seu devido lugar
          </p>

          <h2 className="text-3xl text-center leading-[52px] mt-10 md:text-left">
            "Ela traz facilidade e simplicidade para o seu dia a dia, tornando tudo mais prático e eficiente"
          </h2>
        </div>
      </article>

      <div className="mt-10 max-w-6xl mx-auto">
        <p className="text-2xl text-stone-800">
          Um ambiente organizado traz diversos benefícios, como redução do estresse, aumento da produtividade, economia de tempo na limpeza e manutenção, melhoria na qualidade de vida e sensação de tranquilidade e bem-estar.
        </p>

        <p className="text-xl text-stone-500 mt-6">
          Além disso, uma organização eficiente permite melhor aproveitamento do espaço disponível, facilitando a circulação e tornando os ambientes mais funcionais e agradáveis.
        </p>
      </div>
    </section>
  )
}
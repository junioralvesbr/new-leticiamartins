import Image from "next/image"

export default function Services() {

  const data = [
    {
      title: "Organização residencial",
      image: "/images/cozinha.jpeg",
      alt: "Imagem de cozinha organizada",
      text: "Somos apaixonados por organização e atuamos em todos os ambientes da sua casa. Estamos aqui para te ouvir e elaborar um plano personalizado e perfeito para você e sua familia."
    },
    {
      title: "Pós Mudança",
      image: "/images/mudanca.jpeg",
      alt: "Imagem de serviço de pós mudança",
      text: "Sabemos que o processo de mudança residencial, pode ser desafiador e estressante, mas com um pouco de planejamento e organização, é possível transformar o caos em conforto na sua nova casa."
    },
    {
      title: "Organização Empresarial",
      image: "/images/loja.jpeg",
      alt: "Imagem de loja organizada",
      text: "A organização eficiente é a chave para o sucesso de qualquer empresa. Dessa forma, uma empresa bem organizada tende a ser mais produtiva, competitiva e capaz de se adaptar às mudanças do mercado."
    },
  ]

  return (
    <section className="mt-14 p-4 sm:px-10 xl:px-44">

      <h2 className="text-4xl font-bold py-4">
        Nossos Serviços
      </h2>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-5 sm:flex-nowrap sm:justify-between">

        {data.map((item, index) => (
          <article className="max-w-sm" key={index}>
            <Image
              src={item.image}
              alt={item.alt}
              className="rounded-lg"
              width={500}
              height={500}
            />

            <h3 className="text-2xl font-bold py-4">
              {item.title}
            </h3>

            <p className="text-lg leading-8 text-stone-700">
              {item.text}
            </p>
          </article>
        ))}

      </div>

      <div className="mt-10 flex justify-center">
        <a href="#services"
          className="bg-yellow-100 inline-block px-6 py-3 rounded-lg max-w-max transition-all hover:bg-yellow-200">
          Entre em contato comigo
        </a>
      </div>

    </section>
  )
}

// Projeto desenvolvido por Francisco Costa
export default function Home() {
  return (
    <section className="px-6  md:px-20 py-24">
      <div className="flex max-xl:flex-col gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Preço<span className="text-primary">Mestre</span>
          </h1>

          <p className="mt-2 md:mt-4 text-base md:text-4xl text-gray-700">
            Encontre os melhores preços do Brasil.
          </p>
          <p className="mt-2 md:mt-4 text-xs md:text-lg text-gray-500">
          A sua ferramenta de economia. Encontre os melhores preços na internet e economize enquanto faz compras online!
          </p>

        </div>

      </div>
    </section>
  )
}

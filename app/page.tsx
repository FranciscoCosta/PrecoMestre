import { HeroCarousel, SearchBar } from "@/components";

// Projeto desenvolvido por Francisco Costa
export default function Home() {
  return (
    <main>
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

          <SearchBar />
        </div>
        <HeroCarousel />


      </div>
    </section>
    <section className="trending-section">
      <h2 className="section-text">
        Produtos em <span className="text-primary-red font-extrabold">destaque 🔥</span>
      </h2>

      <div className="flex flex-wrap gap-x-8 gap-y-16">
        {[1,2,3,4,5,6,7,8,9,10].map((product, index) => (
          <div>{product}</div>
        ))
        }
      </div>

      </section>
    </main>
  )
}

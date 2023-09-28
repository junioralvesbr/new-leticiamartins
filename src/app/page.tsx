import Cards from "@/components/Cards";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="sm:px-10 xl:px-32">
      <header className="pt-5 md:pt-10">
        <Header />
      </header>
      <main>
        <Cards />
      </main>
    </div>
  )
}

import Header from "@/components/Header";
import Cards from "@/components/Cards";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Cards />
        <Services />
      </main>
    </div>
  )
}

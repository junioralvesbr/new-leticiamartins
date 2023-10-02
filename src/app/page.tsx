import Header from "@/components/Header";
import Cards from "@/components/Cards";
import Services from "@/components/Services";
import Aboult from "@/components/About";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Cards />
        <Services />
        <Aboult />
      </main>
    </div>
  )
}

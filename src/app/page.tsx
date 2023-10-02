import Header from "@/components/Header";
import Cards from "@/components/Cards";
import Services from "@/components/Services";
import Aboult from "@/components/About";
import Video from "@/components/Video";

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
        <Video />
        <div className="h-screen"></div>
      </main>
    </div>
  )
}

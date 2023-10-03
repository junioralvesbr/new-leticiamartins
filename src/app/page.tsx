import Header from "@/components/Header";
import Cards from "@/components/Cards";
import Services from "@/components/Services";
import Aboult from "@/components/About";
import Video from "@/components/Video";
import Course from "@/components/Course";

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
        <Course />
        <div className="h-screen"></div>
      </main>
    </div>
  )
}

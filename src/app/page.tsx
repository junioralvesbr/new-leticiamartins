import { Metadata } from "next";
import Header from "@/components/Header";
import Cards from "@/components/Cards";
import Services from "@/components/Services";
import Aboult from "@/components/About";
import Video from "@/components/Video";
import Course from "@/components/Course";


export const metadata: Metadata = {
  title: 'Leticia Martins Personal Organizer',
}

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Cards />
        <Services />
        <Aboult />
        <Video />
        <Course />
      </main>
    </>
  )
}

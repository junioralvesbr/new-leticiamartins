import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 py-20">
      <div className="flex justify-between items-center max-w-6xl mx-auto">

        <div>
          <p className="font-autograph text-white text-5xl">
            Leticia Martins
          </p>
          <p className="text-white text-center">
            Personal Organizer
          </p>
        </div>

        <div>
          <a
            href="#"
            className="text-2xl text-white"
          >
            44 9 9813-8138
          </a>
          <div className="flex gap-2 justify-end mt-2">
            <Facebook size={28} />
            <Instagram size={28} />
          </div>
        </div>
      </div>
    </footer>
  )
}
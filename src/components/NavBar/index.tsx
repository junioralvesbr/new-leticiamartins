import { FaSquareFacebook, FaSquareInstagram } from 'react-icons/fa6'

export default function NavBar() {
  return (
    <nav className='h-20 px-6 border-b-[1px]'>
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
        <p className="font-autograph text-3xl text-stone-600 hover:brightness-50 transition-all">
          Leticia Martins
        </p>

        <ul className="flex justify-center gap-6 md:justify-end">
          <li>
            <a
              href="https://www.facebook.com/leticiamartinsorganizer/"
              className="text-stone-600 hover:brightness-50 transition-all"
            >
              <FaSquareFacebook size="30px" />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/leticiamartins.organizer/"
              className="text-stone-600 hover:brightness-50 transition-all"
            >
              <FaSquareInstagram size="30px" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
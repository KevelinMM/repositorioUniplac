import { RiAccountCircleFill } from "react-icons/ri";

export default function Navbar() {
  return (
    <nav className="bg-[#003157] px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img
            src="logoUniplac.png"
            className="pl-1 h-16 sm:h-20"
            alt="Logo Uniplacs"
          />
        </a>
        <div className="flex order-2">
          <a href="login"
            type="button"
            className="text-2xl text-white rounded-full p-1"
          >
            <RiAccountCircleFill />
          </a>
        </div>
        <div className=" items-center flex w-auto text-white text-lg sm:text-2xl md:text-4xl font-bold">
          Repositório Institucional
        </div>
      </div>
    </nav>
  );
}



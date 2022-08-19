import { BsMegaphone } from 'react-icons/bs'
import logo from '../../public/logo.png'

export default function Footer() {
  return (
    <footer className="bg-white text-center text-base left-0 bottom-0 mt-2 flex flex-col justify-center items-center w-full">
      <div className="w-full flex justify-center bg-[#003157] bg-opacity-90">
        <div className="w-1/2 text-white text-sm font-sans px-10 py-2 text-justify">
          <h1 className="flex"><BsMegaphone className="text-xl my-1"/><p className="pl-2 text-lg font-bold">Sobre o repositório</p></h1>
          <p>O Acervo Digital da Uniarp é um Indexador de conteúdo acadêmico, e o seu principal objetivo é unificar as diferentes fontes de pesquisa em um só lugar, o indexador abrange periódicos externos, tccs, monografias, dissertações e artigos produzidos pelos acadêmicos da universidade.</p>
        </div>
        <div className="w-1/2">
        <img
            src="logo.png"
            className="pl-1 h-24"
            alt="Logo Uniplac"
          />
        </div>
      </div>
      <div className="text-gray-700 p-3">
        © Copyright:
        <a href="https://tailwind-elements.com/">{" </NIU>"}</a>
      </div>
    </footer>
  );
}

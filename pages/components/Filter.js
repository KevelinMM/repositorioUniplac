import { MdKeyboardArrowDown } from "react-icons/md"

var estate = false;

export default function Filter() {
  function openClose() {
    if (typeof document != "undefined") {
      if (estate == false) {
        estate = true;
      } else {
        estate = false;
      }
      document.getElementById("navegar").hidden = estate;
    }
  }

  return (
    <div className="flex flex-row-reverse pt-4">
      <form
        className="  bg-gray-50 divide-y divide-gray-100 rounded shadow-xl"
        role="dialog"
        aria-label="Filters"
      >
        <header className="p-5 text-center" onClick={(e) => openClose()}>
          <p className="text-lg font-medium flex" >
            Navegar <span className="sm:hidden m-1"><MdKeyboardArrowDown /></span>
          </p>
        </header>

        <main className="sm:flow-root px-10 py-4 overflow-y-auto" id="navegar" hidden>
          <div className="-my-8 divide-y divide-gray-100">
            <div className="py-8">
              <fieldset>
                <legend className="text-xl font-medium">Repositório</legend>

                <ul className="grid grid-cols-1 gap-3 mt-5">
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-200"
                      />
                      <span className="ml-3 font-medium">Periódicos</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-200 "
                      />
                      <span className="ml-3 font-medium">Artigos</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-200"
                      />
                      <span className="ml-3 font-medium">Livros</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-200"
                      />
                      <span className="ml-3 font-medium">TCCS</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-200 "
                      />
                      <span className="ml-3 font-medium">Monografias</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-200"
                      />
                      <span className="ml-3 font-medium">Dissertações</span>
                    </label>
                  </li>
                </ul>
              </fieldset>
            </div>

            <div className="py-4">
              <fieldset>
                <legend className="text-xl font-medium">Filtros</legend>

                <ul className="grid grid-cols-1 gap-3 mt-5">
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-200"
                      />
                      <span className="ml-3 font-medium">Autor</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-200 "
                      />
                      <span className="ml-3 font-medium">Assunto</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-200"
                      />
                      <span className="ml-3 font-medium">Data da publicação</span>
                    </label>
                  </li>
                </ul>
              </fieldset>
            </div>

            <div className="py-4">
              <fieldset>
                <legend className="text-xl font-medium">Tags</legend>

                <ul className="grid grid-cols-1 gap-3 mt-5">
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-200"
                      />
                      <span className="ml-3 font-medium">Mediciona</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-200 "
                      />
                      <span className="ml-3 font-medium">Psicologia</span>
                    </label>
                  </li>

                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-200"
                      />
                      <span className="ml-3 font-medium">Odotologia</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-gray-200"
                      />
                      <span className="ml-3 font-medium">Mestrado</span>
                    </label>
                  </li>

                </ul>
              </fieldset>
            </div>
          </div>
          <div className="flex items-center justify-between pt-10">
            <button
              className="text-sm font-medium text-gray-600 underline"
              type="button"
            >
              Limpar filtros
            </button>
          </div>
        </main>
      </form>
    </div>
  );
}

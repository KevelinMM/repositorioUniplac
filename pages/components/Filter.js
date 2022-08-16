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
      class="  bg-gray-50 divide-y divide-gray-100 rounded shadow-xl"
      role="dialog"
      aria-label="Filters"
    >
      <header class="p-5 text-center" onClick={(e) => openClose()}>
        <p class="text-lg font-medium flex" >
          Navegar <span className="sm:hidden m-1"><MdKeyboardArrowDown/></span>
        </p>
      </header>

      <main class="sm:flow-root px-10 py-4 overflow-y-auto" id="navegar" hidden>
        <div class="-my-8 divide-y divide-gray-100">
          <div class="py-8">
            <fieldset>
              <legend class="text-xl font-medium">Repositório</legend>

              <ul class="grid grid-cols-1 gap-3 mt-5">
                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-4 h-4 border border-gray-200"
                    />
                    <span class="ml-3 font-medium">Periódicos</span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-4 h-4 border border-gray-200 "
                    />
                    <span class="ml-3 font-medium">Artigos</span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-4 h-4 border border-gray-200"
                    />
                    <span class="ml-3 font-medium">Livros</span>
                  </label>
                </li>
                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-4 h-4 border border-gray-200"
                    />
                    <span class="ml-3 font-medium">TCCS</span>
                  </label>
                </li>
                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-4 h-4 border border-gray-200 "
                    />
                    <span class="ml-3 font-medium">Monografias</span>
                  </label>
                </li>
                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-4 h-4 border border-gray-200"
                    />
                    <span class="ml-3 font-medium">Dissertações</span>
                  </label>
                </li>
              </ul>
            </fieldset>
          </div>

          <div class="py-4">
            <fieldset>
              <legend class="text-xl font-medium">Filtros</legend>

              <ul class="grid grid-cols-1 gap-3 mt-5">
                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-4 h-4 border border-gray-200"
                    />
                    <span class="ml-3 font-medium">Autor</span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-4 h-4 border border-gray-200 "
                    />
                    <span class="ml-3 font-medium">Assunto</span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-4 h-4 border border-gray-200"
                    />
                    <span class="ml-3 font-medium">Data da publicação</span>
                  </label>
                </li>
              </ul>
            </fieldset>
          </div>

          <div class="py-4">
            <fieldset>
              <legend class="text-xl font-medium">Tags</legend>

              <ul class="grid grid-cols-1 gap-3 mt-5">
                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-4 h-4 border border-gray-200"
                    />
                    <span class="ml-3 font-medium">Mediciona</span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-4 h-4 border border-gray-200 "
                    />
                    <span class="ml-3 font-medium">Psicologia</span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-4 h-4 border border-gray-200"
                    />
                    <span class="ml-3 font-medium">Odotologia</span>
                  </label>
                </li>
                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-4 h-4 border border-gray-200"
                    />
                    <span class="ml-3 font-medium">Mestrado</span>
                  </label>
                </li>
           
              </ul>
            </fieldset>
          </div>
        </div>
        <div class="flex items-center justify-between pt-10">
          <button
            class="text-sm font-medium text-gray-600 underline"
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

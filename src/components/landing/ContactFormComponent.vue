<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
      <div class="flex items-start gap-16">
        <div class="hidden lg:flex lg:flex-col lg:flex-1">
          <h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Puntos de contacto</h3>
          <h4 class="mb-1 font-medium text-gray-900 dark:text-white">Cutonala CRT aula 9</h4>
          <address class="text-sm font-normal text-gray-500 dark:text-gray-400 non-italic">
            Nuevo Perif. Ote. 555, Ejido San José, Tateposco,
            <br>45425 Tonalá, Jal.
          </address>
          <h4 class="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Informacion & Marketing</h4>
          <p class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><a
              href="#">info@artisans.com</a></p>
          <h4 class="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Soporte</h4>
          <p class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><a
              href="#">support@artisans.com</a></p>
          <h4 class="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Verificacion y colaboracion</h4>
          <p class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><a
              href="#">colab@flowbite.com</a></p>

        </div>

        <div class="w-full max-w-3xl shrink-0">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 leading-tigt dark:text-white sm:text-4xl mb-4 lg:mb-8">
            Contactanos
          </h2>
          <form action="#" class="space-y-6 md:space-y-8">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu correo
                electronico
                <span class="text-xs text-gray-500 dark:text-gray-400">(Así podemos contactarte)</span></label>
              <input type="email" id="email"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     placeholder="nombre@artisans.com" required>
            </div>

            <div>
              <div class="flex items-center gap-1 mb-2">
                <label for="topic" class="block text-sm font-medium text-gray-900 dark:text-white">
                  Selecciona un tema
                </label>
                <button type="button" data-popover-target="budget-description" class="w-4 h-4">
                  <svg aria-hidden="true" class="text-gray-400 hover:text-primary-800 dark:hover:text-primary-400"
                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">Mostrar información</span>
                </button>
                <div data-popover id="budget-description" role="tooltip"
                     class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                  <div class="p-3 space-y-2">
                    <h3 class="font-semibold text-gray-900 dark:text-white">Escoge según tu interes</h3>
                    <p>Trata de escoger una opción adecuada a tus necesidades ya que de esa manera podemos brindarte una
                      mejor atencion, si tienes alguna duda al respecto da click en Leer más</p>
                    <a href="#"
                       class="flex items-center font-medium text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700">Leer
                      más
                      <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor"
                           viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                  <div data-popper-arrow></div>
                </div>
              </div>

              <select id="topic"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-offset-primary-500 focus:border-b-primary-500 block w-full p-2.5
                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:accent-primary-500 dark:focus:border-b-primary-500
                             ">

                <option class="focus-within:hover:bg-black" selected value="0">Información</option>
                <option value="1">Reportar un problema</option>
                <option value="2">Sugerencias</option>
                <option value="3">Colaborar</option>
                <option value="4">Conectar comunidades</option>
              </select>
            </div>

            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu
                mensaje</label>
              <textarea id="message" rows="6"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder=""></textarea>
              <div class="flex mt-4">
                <input id="default-checkbox" type="checkbox" value=""
                       class="w-4 h-4 mt-0.5 text-primary-500 bg-gray-100 border-gray-300 rounded-sm focus:ring-offset-primary-600 dark:focus:ring-offset-primary-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="default-checkbox" class="ml-2 text-sm  text-gray-500 dark:text-gray-400">He leido y estoy de
                  acuerdo con los <a
                      class="font-normal text-gray-900 underline hover:no-underline dark:text-white" href="#">Terminos
                    del servicio</a> y <a class="font-normal text-gray-900 underline hover:no-underline dark:text-white"
                                          href="#">Politicas de privacidad</a>.</label>
              </div>
            </div>
            <button type="submit"
                    class="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Enviar
              Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ContacrFormComponent'
}
</script>
<script setup>
import {onMounted, ref} from 'vue';
import {initializeThemeToggle} from '../darkmode';
import {initFlowbite} from "flowbite";
import router from "../router/index.js";
import {useStickyNavbar} from "../navbar.js";

const {isVisible} = useStickyNavbar(500, 0);

const isAuthenticated = ref(false);
let usuario = ref('');
let firstUserLetter = ref('');


onMounted(() => {
  initializeThemeToggle();
  initFlowbite(); // Inicializa Flowbite
  useStickyNavbar(); // Inicializa la barra de navegación pegajosa
  const userData = JSON.parse(localStorage.getItem('user_data'));
  const token = localStorage.getItem('jwt_token');
  if (token && userData) {
    isAuthenticated.value = true;
    try {
      usuario = ref(userData.usuario);
      firstUserLetter = usuario.value.userName.charAt(0).toUpperCase();
    } catch (error) {
      console.error('Error al decodificar el token', error);
    }
  }
});


const logout = () => {
  // Lógica para cerrar sesión
  localStorage.removeItem('jwt_token');
  localStorage.removeItem('user_data');
  isAuthenticated.value = false;
  router.push('/login')


};


</script>


<template>

  <header :class="{ 'navbar-scroll': !isVisible }">
    <nav class=" bg-white border-b-primary-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow-sm shadow-primary-400 dark:shadow-primary-800">
      <div class="flex  flex-wrap justify-between items-center mx-auto max-w-screen-xl">

        <a href="/" class="flex items-center">
          <img src="../../public/images/uso/artisan.png" class="mr-3 h-6 sm:h-9 dark:hidden" alt="Logo Header"/>
          <img src="../../public/images/uso/artisan-dark.png" class="hidden mr-3 h-6 sm:h-9 dark:block"
               alt="Logo Header"/>
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Artisan´s CUT</span>
        </a>

        <div class="flex items-center lg:order-2">

          <button data-tooltip-target="tooltip-dark" id="theme-toggle" type="button"
                  class="inline-flex items-center p-2 mr-1 text-sm font-medium text-gray-500 rounded-lg dark:text-gray-400 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
            <svg id="toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg id="toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </button>
          <div id="tooltip-dark" role="tooltip"
               class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900
               rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
            Botón Modo Oscuro
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button data-tooltip-target="tooltip-statistics" type="button"
                  class="hidden items-center p-2 text-sm font-medium text-gray-500 rounded-lg lg:inline-flex dark:text-gray-400 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
            </svg>
          </button>
          <div id="tooltip-statistics" role="tooltip"
               class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
            View analytics
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>

          <button v-if="isAuthenticated" type="button"
                  class="flex mx-3 text-sm relative  items-center justify-center w-8 h-8 overflow-hidden  dark:bg-primary-600
                  bg-primary-600 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
            <span class="sr-only">Abrir menu usuario</span>
            <span class="font-medium text-gray-100 dark:text-gray-300">{{ firstUserLetter }}</span>
          </button>
          <!-- Dropdown menu -->
          <div v-if="isAuthenticated"
               class="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
               id="dropdown">
            <div class="py-3 px-4">
              <span class="block text-sm font-semibold text-gray-900 dark:text-white">{{ usuario.userName }}</span>
              <span class="block text-sm font-light text-gray-500 truncate dark:text-gray-400">{{
                  usuario.email
                }}</span>
            </div>
            <ul class="py-1 font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown">
              <li>
                <a href="#"
                   class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My
                  profile</a>
              </li>
              <li>
                <a href="#"
                   class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Account
                  settings</a>
              </li>
            </ul>
            <ul class="py-1 font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown">
              <li>
                <a href="#"
                   class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <svg class="mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"></path>
                  </svg>
                  My likes</a>
              </li>
              <li>
                <a href="#"
                   class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <svg class="mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                  </svg>
                  Collections</a>
              </li>
              <li>
                <a href="#"
                   class="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              <span class="flex items-center">
                                  <svg class="mr-2 w-5 h-5 text-primary-600 dark:text-primary-500" fill="currentColor"
                                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"
                                                                                                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                                                                                    clip-rule="evenodd"></path></svg> Pro version
                              </span>
                  <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"></path>
                  </svg>
                </a>
              </li>

            </ul>
            <ul class="py-1 font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown">
              <li>
                <a href="" v-if="isAuthenticated" @click="logout"
                   class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cerrar
                  sesión</a>
              </li>
            </ul>
          </div>



          <router-link v-if="!isAuthenticated" to="/login" class="relative inline-flex items-center justify-center p-0.5 overflow-hidden ml-1 lg:ml-3 text-sm font-bold
          text-gray-600  hover:text-white rounded-lg group bg-gradient-to-br from-teal-200 to-lime-700 group-hover:from-teal-200 group-hover:to-primary-500
          dark:text-white dark:hover:text-gray-700 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" >
          <span class="relative px-3 lg:px-5 py-2 lg:py-1.5 transition-all ease-in duration-150 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
          Login
          </span>
          </router-link>

          <button data-collapse-toggle="mobile-menu-2" type="button"
                  class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
            </svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
          </button>

        </div>

        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-3 lg:mt-0">
            <li>
              <router-link to="/"
                           class="block py-2 pr-4 pl-3 text-primary-600 border-b border-gray-100 hover:bg-gray-200
                             focus:ring-4 lg:rounded-lg
                         focus:ring-gray-300 lg:border-0 lg:hover:text-primary-700 lg:p-2 dark:text-primary-500
                         lg:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700"
                           aria-current="page">Inicio
              </router-link>
            </li>
            <li>
              <a href="#"
                 class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-300
                 lg:hover: focus:ring-4 lg:rounded-lg
                 lg:border-0 lg:hover:text-primary-700 lg:p-2 dark:text-gray-400 lg:dark:hover:text-primary-400
                 dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700">Historias</a>
            </li>
            <li>
              <a href="#"
                 class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-300
                 lg:hover: focus:ring-4 lg:rounded-lg
                 lg:border-0 lg:hover:text-primary-700 lg:p-2 dark:text-gray-400 lg:dark:hover:text-primary-400
                 dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700">Marketplace</a>
            </li>
            <li>
              <a href="#"
                 class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-300
                 lg:hover: focus:ring-4 lg:rounded-lg
                 lg:border-0 lg:hover:text-primary-700 lg:p-2 dark:text-gray-400 lg:dark:hover:text-primary-400
                 dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700">Caracteristicas</a>
            </li>
            <li>
              <a href="#"
                 class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-300
                 lg:hover: focus:ring-4 lg:rounded-lg
                 lg:border-0 lg:hover:text-primary-700 lg:p-2 dark:text-gray-400 lg:dark:hover:text-primary-400
                 dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700">Team</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>

header {
  position: sticky;
  top: 0;
  transition: transform 0.6s ease-in-out;

}


.navbar-scroll {
  transform: translateY(-100%);
}


</style>
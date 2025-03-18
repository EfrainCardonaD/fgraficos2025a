<template>
  <div class="text-center">

    <div class="flex items-center justify-center">

      <h1 class="flex items-center text-5xl font-extrabold dark:text-white">Artisan´s<span
          class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-2">CUT</span>
      </h1>

    </div>

    <div class="flex flex-col items-center justify-center gap-4 mt-4 sm:mt-5 sm:gap-8 sm:flex-row">
      <a href="#" title=""
         class="inline-flex items-center text-base font-semibold leading-tight text-primary-600 hover:underline dark:text-primary-500">
        Consulta la documentación
        <svg aria-hidden="true" class="w-4 h-4 ml-1.5" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
        </svg>
      </a>

      <a href="#" title=""
         class="inline-flex items-center text-base font-semibold leading-tight text-primary-600 hover:underline dark:text-primary-500">
        ¿Quieres ayudar?
        <svg aria-hidden="true" class="w-4 h-4 ml-1.5" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
        </svg>
      </a>
    </div>

  </div>
  <div class="max-w-7xl mx-auto mt-8 lg:mt-16">
    <img class="w-full rounded-lg shadow-lg  "
         src="../../../public/images/uso/landig-img.jpg" alt="Content image">
  </div>
</template>
<script>
export default {
  name: 'HeroSectionComponent'
}
</script>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from '../stores/auth'
import router from "../router/index.js";

// Variables reactivas para los campos y manejo de errores
const userName = ref('')
const password = ref('')
const error = ref(null)

// Asumimos que tienes un store de autenticación configurado con Pinia
const authStore = useAuthStore()

// Función para manejar el login
const handleLogin = async () => {
  try {
    const response = await axios.post('/login', {
      userName: userName.value,
      password: password.value,
    })
    authStore.setToken(response.data.JWTtoken, response.data.userName) // Guardar el token y el nombre de usuario
    error.value = null

    if (response.data.JWTtoken) {
      router.push('/') // Redirigir sin recargar la página
    }
  } catch (err) {
    console.error(err)
    if (err.response?.data?.mensaje) {
      error.value = err.response.data.mensaje
    } else {
      error.value = 'Error al iniciar sesión. Revisa tus credenciales.'
    }
  }
}

</script>

<template>
  <div>

    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-20 lg:py-16 lg:grid-cols-12">
        <div class="w-full place-self-center lg:col-span-6">
          <div class="p-6 mx-auto bg-white rounded-lg shadow dark:bg-gray-800 sm:max-w-xl sm:p-8">
            <a href="#" class="inline-flex items-center mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
              Flowbite
            </a>
            <h1 class="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              Welcome back
            </h1>
            <p class="text-sm font-light text-gray-500 dark:text-gray-300">
              Start your website in seconds. Don’t have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>.
            </p>
            <!-- Se reemplaza action="#" por @submit.prevent para manejar el login con Vue -->
            <form class="mt-4 space-y-6 sm:mt-6" @submit.prevent="handleLogin">
              <div class="grid gap-6 sm:grid-cols-2">
                <div>
                  <label for="userName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input
                      type=""
                      name="userName"
                      id="userName"
                      v-model="userName"
                      class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="usuario o email"
                      required
                  >
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input
                      type="password"
                      name="password"
                      id="password"
                      v-model="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                  >
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                <div class="px-5 text-center text-gray-500 dark:text-gray-400">or</div>
                <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required>
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>
              <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in to your account
              </button>
            </form>
            <!-- Muestra mensaje de error si ocurre alguno -->
            <p v-if="error" class="mt-4 text-sm text-red-600">{{ error }}</p>
          </div>
        </div>
        <div class="mr-auto place-self-center lg:col-span-6">
          <img class="hidden mx-auto lg:flex" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg" alt="illustration">
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>

</style>


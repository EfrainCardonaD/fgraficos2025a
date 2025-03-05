<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import LandingPage from "./views/LandingPage.vue";



</script>

<template>



<div>
  <Header :key="$route.fullPath" />
  <router-view/>
  <Footer/>
</div>



</template>

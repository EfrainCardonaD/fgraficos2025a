<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import {initFlowbite} from "flowbite";
import {useRoute} from "vue-router";
import {ref, watch} from "vue";
initFlowbite();

const route = useRoute();
const headerKey = ref(route.fullPath);

watch(route, (newRoute) => {
  headerKey.value = newRoute.fullPath;
});

const isNotFound = ref(false);

watch(route, (newRoute) => {
  isNotFound.value = newRoute.name === 'NotFound';
});

</script>

<template>
  <div>
    <Header v-if="!isNotFound" :key="headerKey" />
    <router-view/>
    <Footer v-if="!isNotFound" />
  </div>
</template>
<style >


</style>

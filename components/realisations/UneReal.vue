<script setup>
import { ref } from 'vue';
// Import du store Realisations
  import { useRealisationsStore } from "../../stores/RealisationsStore.js"
  const realisationsStore = useRealisationsStore()

  // Récupération de l'Id de la route pour savoir quelle réqlisation afficher
  const idRealIndex = useRoute().params.id - 1

  // Récupération dans le store 
</script>

<template >
  <section class="text-xl md:ml-20 text-slate-400 md:text-2xl">
    <div class="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
      <div class="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
        <img class="object-cover object-center rounded" alt="hero" :src="`/images/réalisations/presentation/${ realisationsStore.dataReal[`${ idRealIndex }`].image }`">
      </div>
      <div class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
        <h1 class="mb-4 text-4xl font-medium text-slate-400 sm:text-4xl">{{ realisationsStore.dataReal[`${ idRealIndex }`].typeName }}
        </h1>
        <p class="mb-8 leading-relaxed">{{ realisationsStore.dataReal[`${ idRealIndex }`].description }}</p>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  
</style>
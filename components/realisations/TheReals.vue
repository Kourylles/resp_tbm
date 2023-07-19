<template>
  <div class="flex flex-row flex-wrap justify-evenly gap-4 gap-y-80 mt-8 h-full">
    <div class=" h-20 w-96" v-for="real in realisationsStore.dataReal" :key="real.id" >
        <img class="rounded" :src="`/images/réalisations/presentation/${ real.image }`" alt="Photo">
      <div>
        <div class="bg-slate-700 text-center rounded h-16">
          <button class="btn mt-2">
            {{ real.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
  // Récupération du store Accueil
  import { useRealisationsStore } from "../../stores/RealisationsStore.js"
  const realisationsStore = useRealisationsStore()
</script>
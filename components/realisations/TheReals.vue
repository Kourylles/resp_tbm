<template>
  <div class="flex flex-row flex-wrap h-full gap-4 mt-8 justify-evenly gap-y-80">
    <div class="h-20 w-96" v-for="real in realisationsStore.dataReal" :key="real.id" >
        <img class="rounded" :src="`/images/réalisations/presentation/${ real.image }`" alt="Photo">
      <div>
        <div class="h-16 text-center rounded bg-slate-700">
          <NuxtLink :to="`/realisations/${ real.id }`">
            <button class="mt-2 btn">
              {{ real.name }}
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
  // Récupération du store Réalisation
  import { useRealisationsStore } from "../../stores/RealisationsStore.js"
  const realisationsStore = useRealisationsStore()
</script>
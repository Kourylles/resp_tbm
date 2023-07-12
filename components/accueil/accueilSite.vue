<template>
    <div class="text-center p-6">
      <h1 class="p-4 font-bold text-center text-2xl text-slate-400 md:text-6xl capitalize">{{ accueilStore.dataAccueil.nomAuteur }}</h1>
      <h1 class="p-4 font-bold text-xl text-slate-400 md:text-5xl capitalize">{{ accueilStore.dataAccueil.nomSite }}</h1>
      <div class="mx-auto my-4">
        <img src="/images/accueil/accueil.jpg" alt="" class="w-3/4 mx-auto md:w-1/3">
      </div>
        <p class="text-slate-400 text-xl w-3/4 mx-auto p-4 md:text-2xl">
          {{ accueilStore.dataAccueil.textDescriptif }}
        </p>
    </div>
    <div class="text-center max-h-full">
      <button class="text-slate-400 p-2 h-auto w-28 m-8 bg-gradient-to-br from-slate-700 to-slate-500 rounded-lg hover:bg-gradient-to-br hover:from-slate-500 hover:to-slate-300 hover:text-slate-900 font-bold md:text-xl z-50">Visitez</button>   
    </div>
</template>

<script setup>
// Récupération du store Accueil
import { useAccueilStore } from "../../stores/AccueilStore.js"
const accueilStore = useAccueilStore()
</script>

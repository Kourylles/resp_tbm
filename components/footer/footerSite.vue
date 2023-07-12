<template>
  <div class="fixed right-2 bottom-2 text-slate-400 flex flex-row space-x-2">
    <p class="max-md:hidden">
      &copy; Goutoul's Web Fabrick
    </p>
    <img src="/images/accueil/GWF.gif" alt="Logo GWF" class="w-8">
  </div>
</template>

<script setup>
// Import Store Accueil
import { useAccueilStore } from "../../stores/AccueilStore.js"
const accueilStore = useAccueilStore()
</script>
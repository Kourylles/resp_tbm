<template>
  <div class="fixed flex flex-row text-2xl p-1 justify-around items-center top-1 rounded w-screen h-8 gap-x-3 px-2 bg-gradient-to-br from-slate-700 to-slate-500 md:fixed md:flex-col md:left-6 md:justify-center md:top-1/2 md:w-10 md:h-28 md:gap-y-2 md:p-2 ">
    <NuxtLink :href="aboutStore.dataAbout.adrMail" target="_blank" class="mb-1">
      <Icon name="heroicons:envelope-solid" class="hover:scale-125"/>
    </NuxtLink>
    <img src="/images/accueil/logotb.gif" alt="Logo TBM" class="h-6 w-6">
    <Icon name="heroicons:information-circle-20-solid" class=" hover:scale-150 hover:cursor-pointer" @click="open=true"/>
  </div>
<!-- PopUP lorsque l'on clique sur le bouton information-->
<Teleport to="body">
  <div v-if="open" class="flex flex-col justify-center fixed z-50 bg-slate-300 md:top-8 md:left-20 md:right-20 md:bottom-8">
    <div class="bg-slate-900 text-slate-400 text-center m-4 h-full p-2">
      <p class="text-2xl m-4">{{ aboutStore.dataAbout.develloppeur }}</p>
      <img class="h-20 w-20 mx-auto mt-4 mb-20"  src="/images/accueil/GWF.gif" alt="Logo GWF">
      <p class="text-2xl md:my-10">{{ aboutStore.dataAbout.juriPhotoSite1 }}</p>
      <p class="text-2xl mt-4 md:-m-10">{{ aboutStore.dataAbout.juriPhotoSite2 }}</p>
      <p class="border-slate-400 mt-14 border h-auto w-56 rounded md:mt-36 text-center mx-auto text-white"> Version 2.2.4.3 
          <br> Dernière mise à jour du site 
          <br>le 12/05/2023
        </p>
      <button class="text-slate-400 mt-28 mb-4 p-2 h-auto w-28 md:mt-32 bg-gradient-to-br from-slate-700 to-slate-500 rounded-lg hover:bg-gradient-to-br hover:from-slate-500 hover:to-slate-300 hover:text-slate-900 font-bold md:text-xl" @click="open = false">Fermer</button>
    </div>
  </div>
</Teleport>
</template>
<script setup>
  // Import AboutStore
  import { useAboutStore } from "../../stores/AboutStore.js"
  const aboutStore = useAboutStore()

  import { ref } from 'vue'

const open = ref(false)

</script>
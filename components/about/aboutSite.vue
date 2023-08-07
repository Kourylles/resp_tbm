<template>
	<div
		class="fixed flex flex-row items-center justify-around w-screen h-8 p-1 px-2 text-2xl rounded top-1 gap-x-3 bg-gradient-to-br from-slate-700 to-slate-500 md:fixed md:flex-col md:left-6 md:justify-center md:top-1/2 md:w-10 md:h-44 md:gap-y-2 md:p-2"
	>
		<img src="/images/accueil/logotb.gif" alt="Logo TBM" class="w-6 h-6" />
		<NuxtLink to="/realisations" class="mb-1">
			<Icon name="heroicons:home-solid" class="hover:scale-125" />
		</NuxtLink>
		<NuxtLink :href="aboutStore.adrMail" target="_blank" class="mb-1">
			<Icon name="heroicons:envelope-solid" class="hover:scale-125" />
		</NuxtLink>
		<!-- <img src="/images/accueil/logotb.gif" alt="Logo TBM" class="w-6 h-6" /> -->
		<Icon
			name="heroicons:information-circle-20-solid"
			class="hover:scale-150 hover:cursor-pointer"
			@click="open = true"
		/>
	</div>
	<!-- PopUP lorsque l'on clique sur le bouton information-->
	<Teleport to="body">
		<div
			v-if="open"
			class="fixed z-50 flex flex-col justify-center bg-slate-300 md:top-8 md:left-20 md:right-20 md:bottom-8"
		>
			<div class="h-full p-2 m-4 text-center bg-slate-900 text-slate-400">
				<p class="m-4 text-2xl">{{ aboutStore.develloppeur }}</p>
				<img
					class="w-20 h-20 mx-auto mt-4 mb-20"
					src="/images/accueil/GWF.gif"
					alt="Logo GWF"
				/>
				<p class="text-2xl md:my-10">
					{{ aboutStore.juriPhotoSite1 }}
				</p>
				<p class="mt-4 text-2xl md:-m-10">
					{{ aboutStore.juriPhotoSite2 }}
				</p>
				<p
					class="w-56 h-auto mx-auto text-center text-white border rounded border-slate-400 mt-14 md:mt-36"
				>
					{{ aboutStore.version }} <br />
					Dernière mise à jour du site <br />{{ aboutStore.maj }}
				</p>
				<div>
					<Icon
						name="heroicons:x-circle-solid"
						class="w-10 h-10 mt-20 text-3xl hover:scale-125 btn"
						@click="open = false"
					/>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<script setup>
// Import AboutStore
import { useAboutStore } from '../../stores/AboutStore.js'
const aboutStore = useAboutStore().dataAbout

import { ref } from 'vue'

const open = ref(false)
</script>

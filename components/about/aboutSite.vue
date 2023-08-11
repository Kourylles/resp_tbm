<script setup>
// Import AboutStore
import { useAboutStore } from '../../stores/AboutStore.js'
const aboutStore = useAboutStore().dataAbout
// Initialisation de la variable qui permet l'affichage des informations "A propos"
const open = ref(false)
// Récupération du nom de la route active afin de masquer ou non le bouton "Home"
let isHome = useRoute().name === 'realisations' ? true : false

// Gestion du click en dehors du Popup pour le fermer
import { onClickOutside } from '@vueuse/core'
const target = ref(null)
onClickOutside(target, () => (open.value = false))
</script>

<template>
	<div
		class="fixed flex flex-row items-center justify-around w-screen h-8 p-1 px-2 text-2xl rounded top-1 gap-x-3 bg-gradient-to-br from-slate-700 to-slate-500 md:fixed md:flex-col md:left-6 md:justify-center md:top-1/2 md:w-10 md:h-44 md:gap-y-2 md:p-2"
	>
		<img src="/images/accueil/logotb.gif" alt="Logo TBM" class="w-6 h-6" />
		<NuxtLink to="/realisations" v-if="isHome" class="mb-1">
			<button class="h-full cursor-not-allowed disabled:opacity-25" disabled>
				<Icon name="heroicons:home-solid" />
			</button>
		</NuxtLink>
		<NuxtLink to="/realisations" v-else class="mb-1">
			<button>
				<Icon name="heroicons:home-solid" class="hover:scale-125" />
			</button>
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
			class="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-screen h-screen opacity-75 bg-slate-800"
		>
			<div
				class="relative flex flex-col items-center justify-center w-3/5 p-2 text-white bg-slate-500 h-4/6"
			>
				<Icon
					name="heroicons:x-circle"
					class="absolute z-50 w-10 h-10 rounded-full hover:scale-125 btnGradientRed -top-4 -right-4"
					@click="open = false"
				/>
				<div
					id="modal-inner"
					class="w-full h-full text-xl font-extrabold text-center bg-opacity-100 opacity-100 z-49 bg-slate-950"
					ref="target"
				>
					<p class="m-4">{{ aboutStore.develloppeur }}</p>
					<img
						class="w-20 h-20 mx-auto mt-4 mb-20"
						src="/images/accueil/GWF.gif"
						alt="Logo GWF"
					/>
					<p class="md:my-10">
						{{ aboutStore.juriPhotoSite1 }}
					</p>
					<p class="mt-4 md:-m-10">
						{{ aboutStore.juriPhotoSite2 }}
					</p>
					<p
						class="h-auto p-1 mx-auto text-lg font-normal text-center border rounded w-60 border-slate-400 mt-14 md:mt-28"
					>
						Version {{ aboutStore.version }} <br />
						Dernière mise à jour du site <br />{{ aboutStore.maj }}
					</p>
				</div>
			</div>
		</div>
	</Teleport>
</template>

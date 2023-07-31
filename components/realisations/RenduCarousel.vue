<script setup>
//Store
import { useRealisationsStore } from '../../stores/RealisationsStore.js'

// Initialisation du Store
const realisationsStore = useRealisationsStore()

// Récupération des données de la route
const route = useRoute()

// Récupération de la réalisation conforme au type contenu dans la route
const slugType = route.params.slugType[0]
const realisationDuType = realisationsStore.dataReal.find(
	(item) => item.slugType === slugType
)

// Récupération de l'objet à afficher dans la liste des réalisations du Type selectionné
const slug = route.params.slug
const realToShow = realisationDuType.listeRealisations.find(
	(item) => item.slug === slug
)

// Gestion de l'affichage des informations techniques
const AffTechno = ref(false)
</script>

<template>
	<CarousselTheCarousel
		class="relative h-screen max-h-screen"
		v-slot="{ currentSlide }"
	>
		<CarousselTheSlide
			v-for="(photo, index) in realToShow.listeImages"
			:key="index"
		>
			<div
				class="absolute top-0 left-0 h-full max-h-full"
				v-show="currentSlide === index + 1"
			>
				<img
					:src="`/images/réalisations/objets/${photo.url}`"
					alt="Photos"
					class="object-cover h-full min-w-full"
				/>
			</div>
		</CarousselTheSlide>
	</CarousselTheCarousel>
	<!-- Affichage conditionnel de la techno utilisé -->
	<div
		class="flex items-center justify-center w-1/2 h-auto gap-5 p-2 mx-auto mt-5 text-center border-2 border-slate-500 text-slate-400"
		v-if="AffTechno"
	>
		{{ realToShow.techno }}
		<br />
		<div>
			<Icon
				name="heroicons:x-circle-solid"
				class="w-10 h-10 text-3xl hover:scale-125 btn"
				@Click="AffTechno = !AffTechno"
			/>
		</div>
	</div>
	<div class="flex flex-row items-center justify-center w-full gap-5 my-5">
		<div>
			<ButtonGoHomeButton />
		</div>
		<div class="text-center">
			<Icon
				name="heroicons:information-circle-20-solid"
				class="text-2xl hover:scale-125 btn"
				@Click="AffTechno = !AffTechno"
			/>
		</div>
	</div>
</template>

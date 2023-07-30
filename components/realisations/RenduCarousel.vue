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

	<ButtonGoHome />
</template>

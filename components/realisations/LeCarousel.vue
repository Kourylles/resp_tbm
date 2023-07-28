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
	<div class="mx-auto text-lg text-center mt-14 md:mt-4 text-slate-400">
		{{ realToShow.name }} de la catégorie {{ realisationDuType.typeName }}
		<br />
		<h1 class="text-lg font-semibold">le carousel arrive bientôt...</h1>
		<img
			class="w-1/2 mx-auto mt-4 h-1/2"
			:src="`/images/réalisations/objets/${realToShow.listeImages[0].url}`"
			alt=""
		/>
	</div>
	<ButtonGoHome />
</template>
<style lang="scss" scoped></style>

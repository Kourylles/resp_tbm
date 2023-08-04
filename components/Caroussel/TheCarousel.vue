<template>
	<div class="w-screen">
		<slot :currentSlide="currentSlide" />

		<!-- Boutons de Navigation entre les Slides-->
		<div
			class="absolute flex items-center justify-between w-full h-full text-3xl"
		>
			<!-- Bouton de Gauche-->
			<div class="flex ml-5 text-slate-300">
				<icon
					name="heroicons:chevron-left"
					:class="{ disable: currentSlide === 1 }"
					class="p-1 md:rounded-full md:cursor-pointer bg-gradient-to-br from-red-700 to-red-500 hover:bg-gradient-to-br hover:from-red-500 hover:to-red-300 hover:text-red-900"
					@click="previousSlide"
				></icon>
			</div>
			<!-- Bouton de Droite-->
			<div class="flex mr-5 flex-end text-slate-300">
				<icon
					name="heroicons:chevron-right"
					class="p-1 cursor-pointer md:rounded-full bg-gradient-to-br from-red-700 to-red-500 hover:bg-gradient-to-br hover:from-red-500 hover:to-red-300 hover:text-red-900"
					@click="nextSlide"
				></icon>
			</div>
		</div>

		<!-- Pagination -->
		<div
			class="absolute flex items-center justify-center w-full gap-2 text-red-500 bottom-5"
		>
			<!--On applique la classe "active" que si la slide est égale à (index + 1)  -->
			<span
				@click="goToSlide(index)"
				v-for="(slide, index) in getSlideCount"
				:key="index"
				:class="{ active: index + 1 === currentSlide }"
				class="w-4 h-4 rounded-full shadow-lg cursor-pointer bg-gradient-to-br from-red-700 to-red-500 hover:bg-gradient-to-br hover:from-red-500 hover:to-red-300 hover:text-red-900"
			>
			</span>
		</div>
	</div>
</template>

<script setup>
// Initialisation de la variable de repérage de l'image courante dans le carousel
const currentSlide = ref(1)
// Initialisation de variable qui contiendra le nombre de photos dans le carousel
const getSlideCount = ref(null)

/**
 *  Passer au Slide suivant
 * @description AJouter un au Slide en cours. Si c'est le dernier Slide, passer le Slide courant à 1
 * @param None
 * @returns Nothing
 * @author Lionel
 */
const nextSlide = () => {
	if (currentSlide.value === getSlideCount.value) {
		currentSlide.value = 1
		return
	}
	currentSlide.value += 1
}

/**
 *  Passer au Slide précédent
 * @description Soustraire un au Slide courant. Si c'est le premier Slide, passer le Slide courant à 1
 * @param None
 * @return Nothing
 * @author Lionel
 */
const previousSlide = () => {
	if (currentSlide.value === 1) {
		currentSlide.value = 1
		return
	}
	currentSlide.value -= 1
}

/**
 * Afficher la Slide demandée
 * @description Affecté la valeur de l'index plus un à la Slide courante
 * @param {Integer} index index de la photo
 * @returns Nothing
 * @author Lionel
 */
const goToSlide = (index) => {
	currentSlide.value = index + 1
}

// Fonction qui récupère le nombre de photos à afficher dans le carrousel en comptant tous les éléments
// qui ont la classe .slide

/**
 * Récupérer le nombre de Slide à afficher
 * @description Compter dans le DOM le nombre d'élement qui ont la classe .slide
 * @description Lancer quand le composant est monté
 * @param None
 * @returns Nothing
 * @author Lionel
 */
onMounted(() => {
	getSlideCount.value = document.querySelectorAll('.slide').length
})
</script>

<style lang="scss" scoped>
.active {
	width: 40px;
}
</style>

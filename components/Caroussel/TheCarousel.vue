<template>
	<div class="w-full">
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
					@Click="previousSlide"
				></icon>
			</div>
			<!-- Bouton de Droite-->
			<div class="flex mr-5 flex-end text-slate-300">
				<icon
					name="heroicons:chevron-right"
					class="p-1 cursor-pointer md:rounded-full bg-gradient-to-br from-red-700 to-red-500 hover:bg-gradient-to-br hover:from-red-500 hover:to-red-300 hover:text-red-900"
					@Click="nextSlide"
				></icon>
			</div>
		</div>

		<!-- Pagination -->
		<div
			class="absolute flex items-center justify-center w-full gap-2 text-red-500 bottom-5"
		>
			<!--On applique la classe "active" que si la slide est égale à (index + 1)  -->
			<span
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
// Variable de repérage de l'image courante dans le carousel
const currentSlide = ref(1)
// Variable qui contiendra le nombre de photos dans le carousel
const getSlideCount = ref(null)
// Fonction pour passer à la photo suivante
// Si on est sur la dernière photo, on passe à la 1ère
// Sinon on passe à la photo suivante
const nextSlide = () => {
	if (currentSlide.value === getSlideCount.value) {
		currentSlide.value = 1
		return
	}
	currentSlide.value += 1
}
// Fonction pour passer à la photo précédente
// Si l'on est sur la première photo, on y reste
// Sinon on passe à la précédente
const previousSlide = () => {
	if (currentSlide.value === 1) {
		currentSlide.value = 1
		return
	}
	currentSlide.value -= 1
}

onMounted(() => {
	getSlideCount.value = document.querySelectorAll('.slide').length
	console.log(getSlideCount.value)
})
</script>

<style lang="scss" scoped>
.active {
	width: 40px;
}

.disable {
	opacity: 0;
}
</style>

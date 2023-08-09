<script setup>
// Import de la gestion du scrolling depuis la librairie VueUse
import { useWindowScroll } from '@vueuse/core'

// Si la valeur du scroll vertical est positive, on affichera le bouton de retour en haut de page
const { y } = useWindowScroll()

/**
 * Remonter en haut de l'écran
 * @description None
 * @param None
 * @returns Nothing
 * @author Lionel
 */
const scrollToTop = () => {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}
</script>

<template>
	<button
		v-if="y > 0"
		class="fixed w-6 h-6 text-3xl text-white rounded-full right-3 md:w-10 md:h-10 md:right-0 bottom-11 btnGradientRed hover:scale-125"
		@click="scrollToTop"
	>
		<Icon name="heroicons:chevron-double-up-solid" class="hover:scale-125" />
	</button>
</template>

<style>
.showScrollButton {
	display: block;
}
</style>

<template>
	<div v-if="y > 100" class="fixed bottom-0 right-1">
		<div class="flex flex-row justify-end space-x-2 text-slate-400">
			<p class="max-md:hidden">&copy; Goutoul's Web Fabrick</p>
			<img src="/images/accueil/GWF.gif" alt="Logo GWF" class="w-8" />
		</div>
	</div>
</template>

<script setup>
// Import de la gestion du scrolling depuis la librairie VueUse
import { useWindowScroll } from '@vueuse/core'

// Si la valeur du scroll est >99, on affichera le bouton de retour en haut de page
const { y } = useWindowScroll()
// Import Store Accueil
import { useAccueilStore } from '../../stores/AccueilStore.js'
const accueilStore = useAccueilStore()
</script>

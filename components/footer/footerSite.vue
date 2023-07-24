<template>
	<div
		class="fixed flex flex-row mt-4 space-x-2 right-2 bottom-2 text-slate-400"
	>
		<p class="max-md:hidden">&copy; Goutoul's Web Fabrick</p>
		<img src="/images/accueil/GWF.gif" alt="Logo GWF" class="w-8" />
	</div>
</template>

<script setup>
// Import Store Accueil
import { useAccueilStore } from '../../stores/AccueilStore.js'
const accueilStore = useAccueilStore()
</script>

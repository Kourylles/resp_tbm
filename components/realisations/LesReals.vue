<script setup>
// Récupération du store Réalisation
import { useRealisationsStore } from '../../stores/RealisationsStore.js'
const realisationsStore = useRealisationsStore()
</script>

<template>
	<div
		class="flex flex-row flex-wrap justify-center gap-4 p-4 mx-6 mt-8 gap-y-32 md:justify-center md:gap-y-80 md:flex-row"
	>
		<div
			class="h-20 w-36 md:h-20 md:w-96"
			v-for="real in realisationsStore.dataReal"
			:key="real.id"
		>
			<img
				class="rounded"
				:src="`/images/réalisations/presentation/${real.image}`"
				alt="Photo"
			/>
			<div>
				<div class="h-12 text-center rounded bg-slate-700">
					<!-- <NuxtLink :to="`/realisations/${real.id}`"> -->
					<NuxtLink :to="`/realisations/${real.slugType}`">
						<button class="w-full text-sm md:text-xl md:font-semibold btn">
							{{ real.name }}
						</button>
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

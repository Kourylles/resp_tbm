<script setup>
// Récupération du store Réalisation
import { useRealisationsStore } from '../../stores/RealisationsStore.js'
const realisationsStore = useRealisationsStore()
</script>

<template>
	<div
		class="flex flex-col items-center justify-center h-screen p-4 mx-auto mb-24 mt-14 md:mt-5 md:mb-5 md:items-start gap-y-24 md:gap-4 md:flex-wrap md:flex-row"
	>
		<div
			class="h-20 w-36 md:h-20 md:w-96"
			v-for="real in realisationsStore.dataReal"
			:key="real.id"
		>
			<NuxtLink :to="`/realisations/${real.slugType}`">
				<img
					class="rounded"
					:src="`/images/réalisations/presentation/${real.image}`"
					alt="Photo"
				/>
			</NuxtLink>

			<div class="h-12 text-center rounded bg-slate-700">
				<!-- <NuxtLink :to="`/realisations/${real.id}`"> -->
				<NuxtLink :to="`/realisations/${real.slugType}`">
					<button
						class="w-full text-sm md:text-xl md:font-semibold btn btnGradientGrey"
					>
						{{ real.name }}
					</button>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

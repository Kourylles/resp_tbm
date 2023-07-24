<template>
	<div
		class="flex flex-col h-full gap-4 p-4 mx-auto mt-8 gap-y-48 md:gap-y-80 md:flex-row md:flex-wrap md:justify-center"
	>
		<div
			class="w-48 h-10 mx-auto md:h-20 md:w-96"
			v-for="real in realisationsStore.dataReal"
			:key="real.id"
		>
			<img
				class="rounded"
				:src="`/images/réalisations/presentation/${real.image}`"
				alt="Photo"
			/>
			<div>
				<div class="h-16 text-center rounded bg-slate-700">
					<NuxtLink :to="`/realisations/${real.id}`">
						<button class="mt-2 md:text-xl md:font-semibold btn">
							{{ real.name }}
						</button>
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
// Récupération du store Réalisation
import { useRealisationsStore } from '../../stores/RealisationsStore.js'
const realisationsStore = useRealisationsStore()
</script>

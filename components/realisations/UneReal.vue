<script setup>
// Import du store Realisations
import { storeToRefs } from 'pinia'
import { useRealisationsStore } from '../../stores/RealisationsStore.js'
const realisationsStore = useRealisationsStore()
const { getRealById } = storeToRefs(realisationsStore)

// Récupération de l'index 'Id de la route pour savoir quelle réalisation afficher
const idRealIndex = parseInt(useRoute().params.id) - 1

// Récupération dans le store de l'objet correpondant à l'Id de la route
const realisations = realisationsStore.dataReal[`${idRealIndex}`]
</script>

<template>
	<div class="text-xl text-slate-400 md:text-2xl">
		<!-- Présentation du type de réalisation-->
		<div
			class="flex flex-col items-center px-5 py-24 mx-auto md:flex-row md:mx-20"
		>
			<div class="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
				<img
					class="object-cover object-center rounded"
					alt="hero"
					:src="`/images/réalisations/presentation/${realisations.image}`"
				/>
			</div>
			<div
				class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left"
			>
				<h1 class="mb-4 text-4xl font-medium text-slate-400 sm:text-4xl">
					{{ realisations.typeName }}
				</h1>
				<p class="mb-8 leading-relaxed">
					{{ realisations.description }}
				</p>
			</div>
		</div>
		<!-- Présentation des réalisations du Type-->
		<div
			class="grid grid-cols-2 mx-10 gap-28 md:mx-72 md:grid-cols-3 md:gap-32 text-slate-900"
		>
			<div v-for="real in realisations.listeRealisations" :id="real.name">
				<div class="h-20 mt-2 w-36 md:h-40 md:w-72">
					<img
						class="rounded"
						:src="`/images/réalisations/objets/${real.image}`"
						alt="Photo"
					/>

					<div class="text-center rounded bg-slate-700">
						<NuxtLink to="/">
							<button class="m-2 text-sm font-medium btn">
								{{ real.name }}
							</button>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

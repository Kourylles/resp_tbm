<script setup>
// Import du store Realisations
import { storeToRefs } from 'pinia'
import { useRealisationsStore } from '../../stores/RealisationsStore.js'
const realisationsStore = useRealisationsStore()
const { getRealById } = storeToRefs(realisationsStore)

// Récupération des paramètres de la route
const route = useRoute()

// Récupération de l'index 'Id de la route pour savoir quelle réalisation afficher
//const idRealIndex = parseInt(route.params.id) - 1

// Récupération dans le store de l'objet correpondant à l'Id de la route
//const realisations = realisationsStore.dataReal[`${idRealIndex}`]
const realisations = realisationsStore.dataReal.find(
	(real) => real.slugType === route.params.slugType
)
</script>

<template>
	<div class="mb-20 text-xl text-slate-400 md:text-2xl md:mb-40">
		<!-- Présentation du type de réalisation-->
		<div
			class="flex flex-col items-center px-5 py-24 mx-auto md:flex-row md:mx-20"
		>
			<div class="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
				<img
					class="object-cover object-center rounded"
					alt="photo"
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
			class="flex flex-row flex-wrap items-stretch justify-center gap-4 gap-y-28 text-slate-900 md:mx-20 md:flex md:flex-row md:gap-32 md:justify-center md:flex-wrap"
		>
			<div v-for="real in realisations.listeRealisations" :id="real.name">
				<div class="h-20 mt-2 w-36 md:h-40 md:w-72">
					<NuxtLink :to="`/realisations/${realisations.slugType}/${real.slug}`">
						<img
							class="rounded"
							:src="`/images/réalisations/objets/${real.image}`"
							alt="Photo"
						/>
					</NuxtLink>

					<div class="text-center rounded bg-slate-700">
						<NuxtLink
							:to="`/realisations/${realisations.slugType}/${real.slug}`"
						>
							<button
								class="w-full text-sm font-medium btn btnGradientGrey md:text-lg"
							>
								{{ real.name }}
							</button>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
// Récupération du store Accueil
import { useAccueilStore } from '../../stores/AccueilStore.js'
const accueilStore = useAccueilStore()
</script>

<template>
	<div class="p-6 text-center">
		<h1
			class="p-4 text-2xl font-bold text-center capitalize text-slate-400 lg:text-6xl"
		>
			{{ accueilStore.dataAccueil.nomAuteur }}
		</h1>
		<h1 class="p-4 text-xl font-bold capitalize text-slate-400 lg:text-5xl">
			{{ accueilStore.dataAccueil.nomSite }}
		</h1>
		<div class="mx-auto my-4">
			<img
				src="/images/accueil/accueil.jpg"
				alt=""
				class="w-3/4 mx-auto lg:w-1/3"
			/>
		</div>
		<p class="w-3/4 p-4 mx-auto text-xl text-slate-400 lg:text-2xl">
			{{ accueilStore.dataAccueil.textDescriptif }}
		</p>
	</div>
	<div class="mb-5 text-center">
		<nuxt-link to="/realisations">
			<button class="lg:text-xl lg:font-extrabold btn btnGradientGrey">
				Visitez
			</button>
		</nuxt-link>
	</div>
</template>

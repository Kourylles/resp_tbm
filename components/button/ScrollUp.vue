<script setup>
import { onMounted, ref, onBeforeMount } from 'vue'

/* const scrollButton = ref()
const userScrollDetect = () => {
	if (window.scrollY > 0) {
		scrollButton.value.classList.add('showButton')
		console.log('scrolled')
	} else {
		scrollButton.value.classList.remove('showButton')
		console.log('top')
	}
}
onMounted(() => {
	window.addEventListener('scroll', userScrollDetect)
})
onBeforeMount(() => {
	window.removeEventListener('scroll', userScrollDetect)
}) */

const scrollToTop = () => {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}
</script>

<template>
	<button
		v-if="(scrollY = 0)"
		class="fixed hidden w-6 h-6 text-sm text-white rounded-full right-3 md:w-10 md:h-10 bg-slate-500 md:right-1 bottom-11 bg-gradient-to-br from-slate-700 to-slate-500 hover:bg-gradient-to-br hover:from-slate-500 hover:to-slate-300 hover:text-slate-900 hover:scale-125"
		@click="scrollToTop"
	>
		<Icon name="heroicons:chevron-up-20-solid" class="hover:scale-125" />
	</button>
	<button
		v-else
		class="fixed w-6 h-6 text-sm text-white rounded-full right-3 md:w-10 md:h-10 bg-slate-500 md:right-1 bottom-11 bg-gradient-to-br from-slate-700 to-slate-500 hover:bg-gradient-to-br hover:from-slate-500 hover:to-slate-300 hover:text-slate-900"
		@click="scrollToTop"
	>
		<Icon name="heroicons:chevron-up-20-solid" />
	</button>
</template>

<style>
.showScrollButton {
	display: block;
}
</style>

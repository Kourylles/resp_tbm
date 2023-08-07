<script setup>
const scrollToTop = () => {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}
</script>

<template>
	<button
		class="fixed w-6 h-6 text-sm text-white rounded-full right-3 md:w-10 md:h-10 md:right-0 bottom-11 btnGradientRed hover:scale-125"
		@click="scrollToTop"
	>
		<Icon name="heroicons:chevron-up-20-solid" class="hover:scale-125" />
	</button>
</template>

<style>
.showScrollButton {
	display: block;
}
</style>

<template>
	<div class="min-h-screen">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style>
.page-enter-from {
	opacity: 0;
	transform: translateX(200px);
}
.page-enter-active {
	transition: all 0.9s;
}
.page-leave-to {
	opacity: 0;
	transform: translateX(-200px);
}
</style>

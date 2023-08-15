// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		pageTransition: { name: 'page', mode: 'default' },
	},
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ['nuxt-icon', '@pinia/nuxt', '@vueuse/nuxt'],
})

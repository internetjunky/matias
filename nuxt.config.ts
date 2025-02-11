// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: [
		"~/assets/css/animate.css",
		"~/assets/css/magnific-popup.css",
		"~/assets/css/nice-select.css",
		"~/assets/css/odometer.css",
		"~/assets/css/bootstrap-icons.min.css",
		// "~/assets/css/bootstrap.min.css",

		"bootstrap/scss/bootstrap.scss", 
		"~/assets/sass/main.scss",
		"~/assets/css/main.css",
		"swiper/css/bundle",
	],
	plugins: [{ src: "@/plugins/aos", ssr: false }],
});

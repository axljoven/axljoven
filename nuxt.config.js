import pkg from './package'

export default {
	mode: 'universal',

	/*
	** Headers of the page
	*/
	head: {
		title: pkg.name,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://unpkg.com/ionicons@4.5.5/dist/css/ionicons.min.css' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Playfair+Display:900' },
		]
	},

	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },

	/*
	** Global CSS
	*/
	css: [
		'~/assets/css/tailwind.css',
		'~/assets/css/main.css',
	],

	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
	],

	/*
	** Nuxt.js modules
	*/
	modules: [
		'@nuxtjs/markdownit',
		'@nuxtjs/pwa',
	],

	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
			// Run ESLint on save
			// if (ctx.isDev && ctx.isClient) {
			// 	config.module.rules.push({
			// 		enforce: 'pre',
			// 		test: /\.(js|vue)$/,
			// 		loader: 'eslint-loader',
			// 		exclude: /(node_modules)/
			// 	})
			// }
		}
	}
}

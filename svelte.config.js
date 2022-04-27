import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			prependData: '@import "./src/_vars.scss";'
		},
		postcss: {
			plugins: [autoprefixer()]
		}
	}),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),

		prerender: {
			default: true
		}
	}
};

export default config;

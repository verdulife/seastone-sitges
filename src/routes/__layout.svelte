<script lang="ts">
	import '../fonts/darkergrotesque.css';
	import 'verdu/fonts/operator.css';
	import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
	<title>Seastone Homes | Sitges</title>
	<meta
		name="description"
		content="Seastone Sitges es una promoción de 11 viviendas adosadas, con ventanales que maximizan la luz natural, y proyectadas para garantizar una distribución óptima"
	/>
</svelte:head>

<main>
	<div class="scroll">
		<Nav />
		<slot />
	</div>
</main>

<style lang="scss">
	:global {
		@import './src/_reset.scss';
		@import 'verdu/verdu.scss';
	}

	main {
		background: $white;
	}

	.scroll {
		scroll-behavior: smooth;
	}
</style>

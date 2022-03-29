<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status,
				error
			}
		};
	}
</script>

<script>
	export let status, error;
	const { message } = error;
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="wrapper col acenter xfill">
	<h1>{status}</h1>
	<p>{message}</p>
	<a class="btn pri semi" href="/">BACK HOME PAGE</a>
</div>

<style lang="scss">
	.wrapper {
		background: $white;
		color: $black;
		padding: 15% 40px;

		@media (prefers-color-scheme: dark) {
			background: $black;
			color: $white;
		}
	}

	a.btn {
		margin-top: 20px;
		color: $white;
	}
</style>

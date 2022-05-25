<script>
	import { browser } from '$app/env';
	import { CookieStore } from '$lib/store';
</script>

{#if browser && !$CookieStore.visited}
	<div class="cookies box row fcenter">
		<p>Esta web utiliza cookies para mejorar tu experiencia de navegación.</p>
		<button class="pri semi" on:click={() => ($CookieStore.visited = true)}>Aceptar</button>
		<a href="https://seastone.es/politica-privacidad/" target="_blank" class="btn outwhite semi">Más info.</a>
	</div>
{/if}

<style lang="scss">
	.cookies {
		position: fixed;
		bottom: 50px;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: calc(100% - 40px);
		max-width: 800px;
		background: rgba($pri, 0.7);
		backdrop-filter: blur(10px);
		color: $white;
		border: none;
		border-radius: 10px;
		padding: 15px 20px;
		animation: botFade 500ms backwards;
		animation-delay: 1s;
	}

  p {
    font-size: 20px;
  }

	button,
	a.btn {
		color: $white;
		font-size: 12px;
		margin-left: 15px;
	}

	@media (max-width: $mobile) {
		p {
			text-align: center;
			margin-top: 10px;
			margin-bottom: 20px;
		}

		button,
		a.btn {
			margin: 0 5px;
		}
	}

	@keyframes botFade {
		from {
			transform: translateY(50px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>

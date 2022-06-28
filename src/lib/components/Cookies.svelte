<script>
	import { browser } from '$app/env';
	import { CookieStore } from '$lib/store';
</script>

{#if browser && !$CookieStore.visited}
	<div class="cookies box row fcenter">
		<p>
			Esta web utiliza cookies para mejorar nuestros servicios y conocer el comportamiento del
			usuario mediante el análisis de su navegación. Haga clic en ACEPTAR para prestar su
			consentimiento. También puede obtener más información en nuestra <a
				href="https://seastone.es/politica-de-cookies/"
				target="_blank">Política de Cookies</a
			>.
		</p>
		<button class="pri semi" on:click={() => ($CookieStore.visited = true)}>Aceptar</button>
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
		max-width: 1200px;
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
		text-align: center;
		font-size: 20px;
		margin-bottom: 20px;
	}

	a {
		color: #fff;
		text-decoration: underline;
	}

	button {
		color: $white;
		font-size: 12px;
		margin-left: 15px;
	}

	@media (max-width: $mobile) {
		p {
			margin-top: 10px;
		}

		button {
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

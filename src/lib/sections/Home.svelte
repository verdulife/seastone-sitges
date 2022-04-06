<section class="col fcenter xfill">
	<img class="bg xfill" src="/bg.png" alt="Seastone Sitges" />
	<h1>Descubre el nuevo complejo de 11 viviendas adosadas en <strong>Sitges</strong></h1>
	<a class="btn sec" href="#contact">MÁS INFORMACIÓN</a>
</section>

<style lang="scss">
	section {
		min-height: 100vh;

		.bg {
			position: absolute;
			top: 0;
			left: 0;
			height: 100vh;
			object-fit: cover;
			object-position: bottom center;
		}

		*:not(.bg) {
			z-index: 1;
		}
	}

	h1 {
		max-width: 800px;
		text-align: center;
		line-height: 1;
		font-size: 80px;
		color: $white;
		margin-top: -100px;

		@media (max-width: $tablet) {
			font-size: 50px;
			padding: 20px;
		}

		strong {
			line-height: 1;
			color: $sec;
		}
	}

	a.btn {
		color: $white;
		font-size: 18px;
		margin-top: 40px;
	}
</style>

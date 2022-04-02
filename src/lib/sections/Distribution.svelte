<script>
	let flats = [
		{
			value: 'sotano',
			label: 'Sotano',
			image: '/sotano.png'
		},
		{
			value: 'baja',
			label: 'Planta baja',
			image: '/planta-baja.png'
		},
		{
			value: 'superiores',
			label: 'Primera y segunda planta',
			image: '/plantas-superiores.png'
		}
	];
</script>

<section class="col acenter xfill">
	<h2>Distribución de la vivenda</h2>

	<div class="tabs-container row jcenter xfill">
		<ul class="tabs col fcenter yfill">
			<li class="xfill active">Sótano</li>
			<li class="xfill">Planta Baja</li>
			<li class="xfill">1ª y 2ª Planta</li>
		</ul>

		<div class="image row grow yfill">
			<img class="fill" src="/sotano.png" alt="Sótano" />
		</div>
	</div>
</section>

<style lang="scss">
	section {
		max-width: 1400px;
		margin: 0 auto;
		margin-top: 100px;
		padding-bottom: 100px;

		h2 {
			text-align: center;
			font-size: 60px;
			line-height: 1;
			color: $pri;
		}
	}

	.tabs-container {
		width: 900px;
		height: 500px;
		border: 1px solid $border;
		border-radius: 16px;
		box-shadow: 0px 20px 40px -20px rgba(0, 0, 0, 0.25);
		overflow: hidden;
		margin-top: 40px;

		.tabs {
			width: 300px;
			gap: 30px;
			background: $pri;
			padding: 40px;

			li {
				cursor: pointer;
        position: relative;
				color: $white;
				text-align: center;
				font-size: 24px;
				font-weight: bold;
				border: 1px solid $pri;
				border-radius: 16px;
				padding: 10px 20px;
				transition: 200ms;

				&:hover {
					color: $sec;
				}
			}

			.active {
				background: $white;
				color: $sec;
				border-color: $sec;

				&:after {
					content: '';
					position: absolute;
          bottom: 50%;
          right: -41px;
          display: flex;
					width: 40px;
					height: 1px;
					background: $border;
          z-index: 2;
				}
			}
		}

		.image {
			padding: 40px;

			img {
				object-fit: contain;
				object-position: center;
			}
		}
	}
</style>

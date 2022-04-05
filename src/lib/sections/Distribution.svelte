<script lang="ts">
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
			label: '1ª y 2ª Planta',
			image: '/plantas-superiores.png'
		}
	];

	let selectedIndex = 0;
	$: selected = flats[selectedIndex];
</script>

<section class="col acenter xfill">
	<h2>Distribución de la vivenda</h2>

	<div class="tabs-container row jcenter xfill">
		<ul class="tabs col fcenter yfill">
			{#each flats as flat, i}
				<li
					class="xfill"
					class:active={flat.value === selected.value}
					on:mouseenter={() => (selectedIndex = i)}
					on:click={() => (selectedIndex = i)}
				>
					{flat.label}
				</li>
			{/each}
		</ul>

		<div class="image row grow yfill">
			<img class="fill" src={selected.image} alt={selected.label} />
		</div>
	</div>

	<img class="ce" src="/ce.png" alt="Calificación Energética" />
</section>

<style lang="scss">
	section {
		max-width: 1400px;
		margin: 0 auto;
		margin-top: 100px;
		padding: 0 20px;

		h2 {
			text-align: center;
			font-size: 60px;
			line-height: 1;
			color: $pri;

			@media (max-width: $tablet) {
				font-size: 40px;
			}
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

		@media (max-width: $tablet) {
			width: 100%;
			height: auto;
			flex-direction: column-reverse;
		}

		.tabs {
			width: 300px;
			gap: 30px;
			background: $pri;
			padding: 40px;

			@media (max-width: $tablet) {
				width: 100%;
				gap: 0;
				padding: 20px;
			}

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

				@media (max-width: $tablet) {
					font-size: 18px;
					padding: 10px;
				}

				&:hover {
					color: $sec;
				}

				&:after {
					transition: 200ms;
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

					@media (max-width: $tablet) {
						display: none;
					}
				}
			}
		}

		.image {
			padding: 40px;

			@media (max-width: $tablet) {
				width: 100%;
				height: calc(100vw - 80px);
			}

			img {
				object-fit: contain;
				object-position: center;
			}
		}
	}

	.ce {
		width: 350px;
		margin-top: 60px;

		@media (max-width: $tablet) {
			width: 90%;
		}
	}
</style>

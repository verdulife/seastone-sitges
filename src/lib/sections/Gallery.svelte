<script lang="ts">
	let images = [];

	for (let i = 0; i < 13; i++) {
		images = [...images, `/gallery/${i + 1}.jpg`];
	}

	function prevSlider() {
		const slider = document.querySelector('.slider');
		const wW = window.innerWidth;

		if (slider.scrollLeft > 0) {
			slider.scrollLeft -= wW;
		}
	}

	function nextSlider() {
		const slider = document.querySelector('.slider');
		const wW = window.innerWidth;

		if (slider.scrollLeft < slider.scrollWidth - wW) {
			slider.scrollLeft += wW;
		}
	}
</script>

<section class="col acenter xfill">
	<h2>Galería de imágenes</h2>

	<div class="wrapper xfill">
		<img class="wave wave-top xfill" src="/wave-bot-mask.svg" alt="Mask" />

		<div class="slider xfill">
			{#each images as src}
				<div class="slide yfill">
					<img class="fill" {src} alt="Seastone Homes Sitges" />
				</div>
			{/each}
		</div>

		<div class="arrow arrow-left" on:click={prevSlider}>
			<img class="fill" src="/arrow-left.svg" alt="Left" />
		</div>
		<div class="arrow arrow-right" on:click={nextSlider}>
			<img class="fill" src="/arrow-right.svg" alt="Right" />
		</div>

		<img class="wave wave-bot xfill" src="/wave-top.svg" alt="Mask" />
	</div>
</section>

<style lang="scss">
	section {
		margin-top: 200px;

		@media (max-width: $tablet) {
			margin-top: 100px;
		}
	}

	h2 {
		text-align: center;
		font-size: 60px;
		line-height: 1;
		color: $pri;
		z-index: 2;

		@media (max-width: $tablet) {
			font-size: 40px;
			margin-bottom: 20px;
		}
	}

	.wrapper {
		position: relative;
		background: $pri;

		.wave {
			width: calc(100% + 2px);
			position: absolute;
			left: -1px;
			z-index: 1;
		}

		.wave-top {
			top: 0;
			transform: rotateY(180deg);
			filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.3));
		}

		.wave-bot {
			bottom: -1px;
			transform: rotateY(180deg);
			filter: drop-shadow(0px -20px 10px rgba(0, 0, 0, 0.3));
		}

		.slider {
			height: 105vh;
			scroll-behavior: smooth;
			scroll-snap-type: x mandatory;

			@media (max-width: $tablet) {
				height: 50vh;
			}
		}

		.slide {
			width: 100vw;
			scroll-snap-align: center;

			img {
				object-fit: cover;
				object-position: center;
			}
		}

		.arrow {
			cursor: pointer;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			width: 120px;
			height: 150px;
			background: rgba($black, 0.1);
			backdrop-filter: blur(10px);
			padding: 50px 45px;
			z-index: 2;

			@media (max-width: $tablet) {
				width: 50px;
				height: 70px;
				padding: 25px 15px;
				background: transparent;
				backdrop-filter: none;
				filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.7));
			}

			img {
				transition: 200ms;
			}

			&:hover {
				img {
					transform: scale(1.2);

					@media (max-width: $tablet) {
						transform: none;
					}
				}
			}
		}

		.arrow-left {
			left: 0;
		}

		.arrow-right {
			right: 0;
		}
	}
</style>

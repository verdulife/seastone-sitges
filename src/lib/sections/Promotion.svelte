<div class="wrapper col xfill">
	<img class="wave-top xfill" src="/wave-top.svg" alt="Wave" />

	<section class="col acenter xfill">
		<header>
			<h2>La Promoción</h2>

			<p>
				Seastone Sitges una promoción en un enclave privilegiado pensada para disfrutar el día a día
				en un entorno único, donde la luz será el elemento predominante en casi todas las estancias,
				con amplios ventanales que permitan maximizar la iluminación natural.Todas las viviendas han
				sido proyectadas en detalle para garantizar unas distribuciones optimas minimizando las
				zonas de paso para así obtener áreas habitables más amplias.
			</p>
		</header>

		<div class="title row xfill">
			<div class="content col jcenter xhalf">
				<h2>
					El complejo
					<br />
					residencial
				</h2>

				<p>
					Se compone de 11 viviendas adosadas de 4 dormitorios, distribuidos en 4 plantas con
					amplias terrazas.
				</p>
			</div>

			<div class="image xhalf">
				<img class="fill" src="/promotion.png" alt="La promoción" />
			</div>
		</div>

		<ul class="description row jcenter xfill">
			<li class="col acenter">
				<h3>Sótano</h3>
				<p>
					Garaje privado para dos coches con acceso directo a la vivienda, zona de servicios y
					trastero.
				</p>
			</li>

			<li class="col acenter">
				<h3>Planta Baja</h3>
				<p>
					Vestíbulo de entrada, salón principal de más de 50 m2 con acceso a la terraza propia,
					cocina integrada, baño completo.
				</p>
			</li>

			<li class="col acenter">
				<h3>Primera Planta</h3>
				<p>
					Distribuidor con armario empotrado, dormitorio principal con vestidor y baño principal en
					suite. Dos dormitorios con armarios empotrados y baño completo.
				</p>
			</li>

			<li class="col acenter">
				<h3>Segunda Planta</h3>
				<p>
					1 estudio/dormitorio, con la posibilidad de agregar otro baño y salida a dos amplias
					terrazas, una con orientación sur y la otra más pequeña con vistas a la zona comunitaria.
				</p>
			</li>
		</ul>

		<footer>
			<h3>Amplia zona ajardinada con piscina comunitaria</h3>
			<p>
				Ofrecemos posibilidades de personalización en los acabados cerámicos, pavimentos, griferías
				y otros aspectos decorativos de tu futura vivienda.Podrás elegir aquellas opciones que mejor
				se adapten a tus gustos, pero fundamentalmente a la idea que tienes de tu hogar.
			</p>
		</footer>
	</section>

	<img class="wave-bot xfill" src="/wave-bot.svg" alt="Wave" />
</div>

<style lang="scss">
	.wrapper {
		margin-top: 100px;
	}

	section {
		background: $pri;
		margin: 0 auto;
	}

	header {
		padding: 0 60px;
		text-align: center;
		color: $white;

		@media (max-width: $tablet) {
			padding: 60px 20px;
		}

		h2 {
			line-height: 1;
			font-size: 60px;

			@media (max-width: $tablet) {
				font-size: 40px;
			}
		}

		p {
			max-width: 900px;
			margin-top: 40px;
		}
	}

	.title {
		max-width: 1400px;
		margin-top: 100px;
		padding: 0 60px;

		@media (max-width: $tablet) {
			padding: 0 20px;
		}

		.content {
			height: 500px;

			@media (max-width: $tablet) {
				width: 100%;
				height: auto;
				align-items: center;
			}

			h2 {
				color: $white;
				font-size: 80px;
				line-height: 1;

				@media (max-width: $tablet) {
					font-size: 60px;
					text-align: center;
				}
			}

			p {
				max-width: 500px;
				color: $white;
				margin-top: 40px;

				@media (max-width: $tablet) {
					text-align: center;
					margin-top: 20px;
				}
			}
		}

		.image {
			height: 500px;

			@media (max-width: $tablet) {
				width: 100%;
				height: auto;
				margin-top: 40px;
			}

			img {
				object-fit: cover;
				object-position: center;
			}
		}
	}

	h3 {
		color: $sec;
		font-size: 40px;
		line-height: 1;
		margin-bottom: 10px;

		@media (max-width: $tablet) {
			font-size: 30px;
		}
	}

	p {
    max-width: 900px;
		color: $white;
	}

	.description {
		margin-top: 100px;

		@media (max-width: $tablet) {
			margin-top: 0px;
		}

		li {
			width: 50%;
			max-width: 600px;
			text-align: center;
			padding: 60px;

			@media (max-width: $tablet) {
				width: 100%;
				padding: 20px;
			}
		}
	}

  footer {
    margin-top: 100px;
    text-align: center;
		padding: 0 60px;

		@media (max-width: $tablet) {
			padding: 60px 20px;
			margin-top: 0px;
		}
  }
</style>

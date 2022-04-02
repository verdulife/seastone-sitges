<section>
	<div class="title row xfill">
		<div class="content col jcenter xhalf">
			<h2>
				<strong>Sitges</strong>
				<br />
				Mediterraneo
				<br />
				Costero
				<br />
				y natural
			</h2>
		</div>

		<div class="image xhalf">
			<img class="fill" src="/sitges.png" alt="Sitges" />
		</div>
	</div>

	<div class="description">
		<p>
			Disfruta de un microclima muy especial, más de 300 días de sol al año que permiten disfrutar
			de la naturaleza y del mar en casi cualquier época del año, el antiguo puerto de pescadores se
			ha convertido con los años en unos de los mejores sitios para vivir.<br /><br />Cuenta con 4
			kms de playas, pequeñas y tranquilas calas, amplios arenales o playas situadas en el núcleo
			urbano a las que se puede llegar andando. Al mismo tiempo se encuentra al pie del parque
			Natural del Garraf para poder disfrutar del contacto con la naturaleza y gran cantidad de
			actividades al aire libre.También cuenta con 3 puertos deportivos, Aiguadolç, Garraf y
			GinestaA solo 38 kms de Barcelona, ofrece excelentes conexiones de transporte con el centro de
			la ciudad y al Aeropuerto Josep Tarradellas (El Prat)Autopista C-32 y carretera C-31. Renfe
			Cercanías a 5 minutos andando desde su casa conecta con el centro el centro de Barcelona en
			menos de 40 minutos. Varias líneas interurbanas de bus trasladan a las localidades vecinas, al
			Aeropuerto del Prat y al centro de Barcelona.
		</p>
	</div>
</section>

<style lang="scss">
	section {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 60px;
	}

	.title {
		.content {
			height: 600px;

			h2 {
				strong {
					font-size: 40px;
					color: $sec;
				}

				max-width: 800px;
				line-height: 1;
				font-size: 80px;
				color: $pri;
			}
		}

		.image {
			height: 600px;

			img {
				object-fit: cover;
				object-position: center;
			}
		}
	}

	.description {
		margin-top: 100px;

		p {
			column-count: 2;
			column-gap: 60px;
		}
	}
</style>

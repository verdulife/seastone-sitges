<script lang="ts">
	function sendForm() {}
</script>

<section class="col acenter">
	<h2>Encuéntranos en</h2>
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.9659329132705!2d1.8059413154213373!3d41.24429997927751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a380419cdc3e75%3A0xf75e2addcbb67a0a!2sCarrer%20de%20Salvador%20Robert%20Ravent%C3%B3s%2C%202%2C%2008870%20Sitges%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1648927183868!5m2!1ses!2ses"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		title="Carrer Salvador Robert i Raventos 2, Sitges"
	/>

	<h2>Contacta</h2>

	<div class="contact row jcenter xfill">
		<div class="info col acenter xhalf">
			<h3>Comercializa</h3>
			<img src="/swan-logo.svg" alt="Swan Property Services" />

			<p>
				<strong>TELÉFONO</strong>
				<br />
				<a href="tel:0034936337698">(+34) 93 633 76 98</a>
				<br /><br />
				<strong>EMAIL</strong>
				<br />
				<a href="mailto:sitges@seastone.es">sitges@seastone.es</a>
				<br /><br />
				Se atiende con cita previa
			</p>
		</div>

		<form class="col xhalf" on:submit|preventDefault={sendForm}>
			<div class="input-wrapper col xfill">
				<label for="name">Nombre</label>
				<input type="text" id="name" name="name" required />
			</div>

			<div class="input-wrapper col xfill">
				<label for="email">Correo electrónico</label>
				<input type="email" id="email" name="email" required />
			</div>

			<div class="input-wrapper col xfill">
				<label for="phone">Teléfono</label>
				<input type="phone" id="phone" name="phone" required />
			</div>

			<div class="input-wrapper col xfill">
				<label for="message">Mensaje</label>
				<textarea type="message" id="message" name="message" required />
			</div>

			<button class="sec">ENVIAR</button>
		</form>
	</div>
</section>

<style lang="scss">
	section {
		background: $pri;
		margin: 0 auto;
		padding: 100px 0;

		@media (max-width: $tablet) {
			padding: 50px 0;
		}
	}

	h2 {
		text-align: center;
		font-size: 60px;
		line-height: 1;
		color: $white;
		margin: 40px 0;

		@media (max-width: $tablet) {
			font-size: 40px;
		}
	}

	iframe {
		width: 900px;
		height: 500px;
		border-radius: 16px;
		box-shadow: 0px 40px 40px -20px rgba(0, 0, 0, 0.4);
		margin-bottom: 100px;

		@media (max-width: $tablet) {
			width: calc(100% - 20px);
			height: 300px;
			margin-bottom: 50px;
		}
	}

	.contact {
		max-width: 1200px;
		color: $white;
		margin-top: 40px;

		@media (max-width: $tablet) {
			margin-top: 0;
		}
	}

	.info {
		padding: 40px;

		@media (max-width: $tablet) {
			width: 100%;
			padding: 20px;
		}

		h3 {
			font-size: 24px;
			margin-bottom: 20px;
		}

		img {
			width: 250px;
			margin-bottom: 40px;

			@media (max-width: $tablet) {
				width: 200px;
			}
		}

		p {
			text-align: center;
		}

		a {
			color: $sec;
		}
	}

	form {
		border-left: 1px solid darken($pri, 5%);
		padding: 40px;

		@media (max-width: $tablet) {
			width: 100%;
			border-left: none;
			padding: 20px;
		}

		label {
			text-transform: uppercase;
			font-size: 14px;
			font-weight: bold;
			color: $grey;
			padding: 15px;
		}

		input,
		textarea {
			width: 100%;
			border-bottom: 1px solid darken($pri, 5%);
			margin-bottom: 20px;

			&:focus {
				border-bottom: 1px solid $sec;
			}
		}

		textarea {
			height: 150px;
			resize: none;
		}

		button {
			width: 250px;
			margin-top: 20px;

			@media (max-width: $tablet) {
				width: 100%;
			}
		}
	}
</style>

<nav class="row jcenter xfill">
	<a href="/">
		<img class="yfill" src="/logo.svg" alt="Logo" />
	</a>
</nav>

<style lang="scss">
	nav {
		position: fixed;
		inset: 0 0 auto 0;
		z-index: 9;

		a {
			background: $pri;
			padding: 20px 40px;
			border-radius: 0 0 16px 16px;
			box-shadow: 0px 10px 30px 0 rgba(0, 0, 0, 0.3);

			@media (max-width: $tablet) {
				padding: 10px 20px;
			}

			img {
				width: 150px;

				@media (max-width: $tablet) {
					width: 100px;
				}
			}
		}
	}
</style>

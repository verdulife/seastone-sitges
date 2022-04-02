<nav class="row jcenter xfill">
	<a href="/">
		<img class="yfill" src="/logo.svg" alt="Logo" />
	</a>
</nav>

<style lang="scss">
	nav {
		position: fixed;
		inset: 0 0 auto 0;
		border-top: 10px solid $pri;
		box-shadow: inset 0 1px 0 0 $sec;
		z-index: 9;

		a {
			background: $pri;
			padding: 20px 40px;
			border: 1px solid $sec;
			border-top: none;
			border-radius: 0 0 16px 16px;
		}
	}
</style>

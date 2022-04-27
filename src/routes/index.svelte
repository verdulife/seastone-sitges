<script lang="ts">
	import { CookieStore } from '$lib/store';

	import Home from '$lib/sections/Home.svelte';
	import About from '$lib/sections/About.svelte';
	import Where from '$lib/sections/Where.svelte';
	import Promotion from '$lib/sections/Promotion.svelte';
	import Distribution from '$lib/sections/Distribution.svelte';
	import Gallery from '$lib/sections/Gallery.svelte';
	import Contact from '$lib/sections/Contact.svelte';

	import Cookies from '$lib/components/Cookies.svelte';
</script>

<Home />
<About />
<Where />
<Promotion />
<Distribution />
<Gallery />
<Contact />

<Cookies />

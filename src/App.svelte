<script>
	import Navbar from "./Navbar.svelte"
	import Hero from "./Hero.svelte";
	import Benefits from "./Benefits.svelte";

	export let primary;
	export let secondary;
	export let tertiary;
	export let quaternary;
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"> 
<main>
	<Navbar primary={primary} />
	<Hero primary={primary} secondary={secondary} tertiary={tertiary} />
	<Benefits primary={primary} quaternary={quaternary}/>
</main>

<style lang="scss">
	:global(h1, h2, h3, h4, h5, h6, p) {
		margin: 0;
	}

	:global(body, html) {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
		height: 1000vh;
	}

	main {
		display: flex;
		flex-direction: column;
		gap: 6rem;
	}
</style>
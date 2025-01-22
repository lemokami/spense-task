<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/manrope';
	let { children } = $props();
</script>

{@render children()}

<style>
	:global(body) {
		font-family: 'Manrope Variable', sans-serif;
	}
</style>

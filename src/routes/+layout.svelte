<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>WebCraft Ali</title>
	<meta name="description" content="Crafting Digital Experiences That Convert" />
</svelte:head>

<Navigation />
<main>
	{@render children?.()}
</main>

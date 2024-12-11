<script lang="ts">
	import { onMount } from 'svelte';

	let contentItems: any[] = [];

	onMount(async () => {
		const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/content`, {
			credentials: 'include'
		});

		contentItems = await response.json();
	});
</script>

<h1>Content Management</h1>

<ul>
	{#each contentItems as item}
		<li>{item.title} - <a href={`/content/edit/${item._id}`}>Edit</a></li>
	{/each}
</ul>

<a href="/content/create">Create New Content</a>

<script lang="ts">
	import { onMount } from 'svelte';
	import { user } from '../../stores/auth';

	let contentItems: any[] = [];

	onMount(async () => {
		const { token } = $user;

		const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/content`, {
			headers: { Authorization: `Bearer ${token}` }
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

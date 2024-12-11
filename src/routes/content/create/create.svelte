<script lang="ts">
	import { goto } from '$app/navigation';

	let title = '';
	let slug = '';
	let content = '';

	async function createContent() {
		const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/content`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify({ title, slug, content })
		});

		if (response.ok) {
			goto('/content');
		} else {
			alert('Failed to create content');
		}
	}
</script>

<h1>Create Content</h1>
<form on:submit|preventDefault={createContent}>
	<label id="title" for="title">Title</label>
	<input type="text" bind:value={title} required />

	<label id="slug" for="slug">Slug</label>
	<input type="text" bind:value={slug} required />

	<label id="content" for="content">Content</label>
	<textarea bind:value={content} required></textarea>

	<button type="submit">Create</button>
</form>

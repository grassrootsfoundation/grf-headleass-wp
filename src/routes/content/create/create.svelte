<script lang="ts">
	import { user } from '../../../stores/auth';
	import { goto } from '$app/navigation';

	let title = '';
	let slug = '';
	let content = '';

	async function createContent() {
		const { token } = $user;

		const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/content`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			},
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
	<label>Title</label>
	<input type="text" bind:value={title} required />

	<label>Slug</label>
	<input type="text" bind:value={slug} required />

	<label>Content</label>
	<textarea bind:value={content} required></textarea>

	<button type="submit">Create</button>
</form>

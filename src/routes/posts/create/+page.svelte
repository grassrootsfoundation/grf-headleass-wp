<script lang="ts">
	import { goto } from '$app/navigation';

	let title = '';
	let content = '';
	let errorMessage = '';

	async function createPost() {
		try {
			const response = await fetch('/api/posts', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ title, content }),
			});

			if (response.ok) {
				goto('/posts'); // Redirect to posts list
			} else {
				const error = await response.json();
				errorMessage = error.message || 'Failed to create the post.';
			}
		} catch (error) {
			if (error instanceof Error) {
				errorMessage = 'An error occurred while creating the post.';
			}
		}
	}

	// interface Block {
	// 	id: number;
	// 	content: string;
	// }

	// let items: Block[] = [
	// 	{ id: 1, content: 'Block 1' },
	// 	{ id: 2, content: 'Block 2' },
	// 	{ id: 3, content: 'Block 3' },
	// ];
</script>

<main>
	<h1>Create a New Post</h1>
	<form on:submit|preventDefault={createPost}>
		<label for="title">Title</label>
		<input id="title" bind:value={title} required />

		<label for="content">Content</label>
		<textarea id="content" bind:value={content} required></textarea>

		<button type="submit">Create Post</button>
	</form>
	{#if errorMessage}
		<p>{errorMessage}</p>
	{/if}
</main>

<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { canEditOrDeletePost } from '$lib/utils/auth/permissions';

	let posts: any[] = [];
	let user = null;
	let errorMessage = '';

	// Fetch all posts
	async function fetchPosts() {
		try {
			const response = await fetch('/api/posts');
			if (response.ok) {
				posts = await response.json();
			} else {
				errorMessage = 'Failed to fetch posts.';
			}
		} catch (error) {
			errorMessage = 'An error occurred while fetching posts.';
		}
	}

	async function deletePost(id: string) {
		try {
			const response = await fetch(`/api/posts/${id}`, {
				method: 'DELETE'
			});
			if (response.ok) {
				posts = posts.filter((post) => post._id !== id); // Remove the deleted post from the list
			} else {
				errorMessage = 'Failed to delete the post.';
			}
		} catch (error) {
			errorMessage = 'An error occurred while deleting the post.';
		}
	}

	onMount(fetchPosts);
</script>

<main>
	<h1>All Posts</h1>
	{#if errorMessage}
		<p>{errorMessage}</p>
	{/if}
	<ul>
		{#each posts as post}
			<li>
				<a href={`/posts/${post._id}`}>{post.title}</a>
				{#if canEditOrDeletePost(user, post)}
					<button on:click={() => goto(`/posts/${post._id}/edit`)}>Edit</button>
					<button on:click={() => deletePost(post._id)}>Delete</button>
				{/if}
			</li>
		{/each}
	</ul>
	{#if ['admin', 'editor', 'author'].includes(user?.role)}
		<button on:click={() => goto('/posts/new')}>Create New Post</button>
	{/if}
</main>

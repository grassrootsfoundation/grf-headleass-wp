<script lang="ts">
  import { goto } from '$app/navigation';

  import { onMount } from 'svelte';

  export let params = { id: '' };

  let title = '';
  let content = '';
  let errorMessage = '';

  async function fetchPost() {
    try {
      const response = await fetch(`/api/posts/${params.id}`);
      if (response.ok) {
        const post = await response.json();
        title = post.title;
        content = post.content;
      } else {
        errorMessage = 'Failed to fetch the post.';
      }
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = 'An error occurred while fetching the post.';
      }
    }
  }

  async function updatePost() {
    try {
      const response = await fetch(`/api/posts/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        goto(`/posts/${params.id}`); // Redirect to the updated post
      } else {
        const error = await response.json();
        errorMessage = error.message || 'Failed to update the post.';
      }
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = 'An error occurred while updating the post.';
      }
    }
  }

  onMount(fetchPost);
</script>

<main>
  <h1>Edit Post</h1>
  <form on:submit|preventDefault={updatePost}>
    <label for="title">Title</label>
    <input id="title" bind:value={title} required />

    <label for="content">Content</label>
    <textarea id="content" bind:value={content} required></textarea>

    <button type="submit">Update Post</button>
  </form>
  {#if errorMessage}
    <p>{errorMessage}</p>
  {/if}
</main>

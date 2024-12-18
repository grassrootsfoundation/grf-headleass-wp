<script lang="ts">
  import { goto } from '$app/navigation';

  import { onMount } from 'svelte';

  import { user } from '$src/stores/auth';

  import { canEditOrDeletePost } from '$utils/auth/permissions';

  import type { Post, UserDocument as User } from '$types/api-types';

  export let params: { id: string };

  let post: Post | null = null;
  let errorMessage = '';
  let currentUser: User | null = null;

  $: user.subscribe((value) => {
    currentUser = value;
  });

  async function fetchPost() {
    try {
      const response = await fetch(`/api/posts/${params.id}`);
      if (response.ok) {
        post = await response.json();
      } else {
        errorMessage = 'Failed to fetch the post.';
      }
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = 'An error occurred while fetching the post.';
      }
    }
  }

  async function deletePost() {
    try {
      const response = await fetch(`/api/posts/${params.id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        goto('/posts'); // Redirect to the posts list
      } else {
        errorMessage = 'Failed to delete the post.';
      }
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = 'An error occurred while deleting the post.';
      }
    }
  }

  onMount(fetchPost);
</script>

<main>
  {#if post}
    <h1>{post.title}</h1>
    <p>{post.content}</p>
    {#if canEditOrDeletePost(currentUser, post)}
      <button on:click={() => goto(`/posts/${post?._id}/edit`)}>Edit</button>
      <button on:click={deletePost}>Delete</button>
    {/if}
  {/if}
  {#if errorMessage}
    <p>{errorMessage}</p>
  {/if}
</main>

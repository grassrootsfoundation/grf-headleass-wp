<script lang="ts">
  import { goto } from '$app/navigation';

  import { onMount } from 'svelte';

  import { user } from '$src/stores/auth';

  import { fetchPosts as apiFetchPosts } from '$lib/api/posts/fetch-posts';
  import { canEditOrDeletePost } from '$lib/utils/auth/permissions';

  import type { Post, UserDocument as User } from '$types/api-types';

  let posts: Post[] = [];
  let currentUser: User | null = null;
  let errorMessage = '';

  $: user.subscribe((value) => {
    currentUser = value;
  });

  // Fetch all posts
  async function fetchPosts() {
    try {
      const response = await apiFetchPosts();

      if (response.ok) {
        posts = await response.json();
      } else {
        errorMessage = 'Failed to fetch posts.';
      }
    } catch (error) {
      console.log(error);
      errorMessage = 'An error occurred while fetching posts.';
    }
  }

  async function deletePost(id: string) {
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        posts = posts.filter((post) => post._id !== id); // Remove the deleted post from the list
      } else {
        errorMessage = 'Failed to delete the post.';
      }
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = 'An error occurred while deleting the post.';
      }
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
        {#if canEditOrDeletePost(currentUser, post)}
          <button on:click={() => goto(`/posts/${post._id}/edit`)}>Edit</button>
          <button on:click={() => deletePost(post._id)}>Delete</button>
        {/if}
      </li>
    {/each}
  </ul>
  {#if currentUser?.role && ['admin', 'editor', 'author'].includes(currentUser?.role)}
    <button on:click={() => goto('/posts/new')}>Create New Post</button>
  {/if}
</main>

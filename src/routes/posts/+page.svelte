<script lang="ts">
  import Heading from '$src/lib/components/heading/heading.svelte';
  import RawHtml from '$src/lib/components/raw-html/raw-html.svelte';

  export let data: { posts: { id: string; title: string; content: string }[] };
</script>

<main class="contain">
  <Heading level="h1">Something Should be here</Heading>

  {#if data.posts && data.posts.length}
    <ul>
      {#each data.posts as post}
        <li id={post.id}>
          <Heading level="2" display="3">{post.title}</Heading>
          <RawHtml as="div" content={post.content}></RawHtml>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No posts found.</p>
  {/if}
</main>

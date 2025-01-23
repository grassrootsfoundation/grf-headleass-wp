<script lang="ts">
  import Heading from '$src/lib/components/heading/heading.svelte';
  import RawHtml from '$src/lib/components/raw-html/raw-html.svelte';

  export let data;
</script>

<main class="contain">
  {#if data.posts}
    <div>
      {#each data.posts as post}
        <div id={post.id}>
          {#if post.featuredImage}
            <div class="post-thumnbail">
              <img
                class="thumbnail"
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText}
              />
            </div>
          {/if}
          <div>
            <Heading level="2" display="3">{post.title}</Heading>
            <RawHtml as="div" content={post.excerpt}></RawHtml>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <p>No posts found.</p>
  {/if}
</main>

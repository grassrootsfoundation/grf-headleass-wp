<script lang="ts">
  import { onMount } from 'svelte';

  import Editor from '$components/editor/editor.svelte';
  import RawHtml from '$components/raw-html/raw-html.svelte';

  import { user } from '$src/stores/auth';
  import { contentStore, fetchContent } from '$src/stores/content';

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  let currentUser = null;
  let isAuthorized: boolean | null = false;
  let contentId = 'homepage';

  // Sync user state
  $: user.subscribe((value) => {
    currentUser = value;
    isAuthorized =
      currentUser && ['author', 'editor', 'admin'].includes(currentUser.role);
  });

  // Fetch content on mount
  onMount(async () => {
    try {
      await fetchContent(contentId, API_BASE_URL);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error fetching content:', error);
      }
    }
  });

  // Reactively get the state of the content store
  $: content = $contentStore;
</script>

{#if content.isLoading}
  <div>Loading content...</div>
{:else if content.error}
  <div>Error loading content: {content.error}</div>
{:else if isAuthorized && content.data}
  <Editor {contentId} {isAuthorized} initialData={content.data} />
{:else}
  <!-- Render read-only content for unauthorized users -->
  <div>
    {#if content.data}
      {#each content.data.blocks as block}
        {#if block.type === 'header'}
          <h1>
            <RawHtml html={block?.data?.text} />
          </h1>
        {:else if block.type === 'paragraph'}
          <p>
            <RawHtml html={block?.data?.text} />
          </p>
        {:else if block.type === 'list'}
          <ul>
            {#each block?.data?.items ?? [] as item}
              <li>
                {#if item?.items}
                  <RawHtml html={item.content} />
                  <ul>
                    {#each item.items ?? [] as subitem}
                      <li>
                        <RawHtml html={subitem} />
                      </li>
                    {/each}
                  </ul>
                {:else}
                  <RawHtml html={item} />
                {/if}
              </li>
            {/each}
          </ul>
        {:else}
          <p>Unsupported block type: {block.type}</p>
        {/if}
      {/each}
    {:else}
      <p>No content available.</p>
    {/if}
  </div>
{/if}

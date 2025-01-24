<script lang="ts">
  // import Heading from '$components/heading/heading.svelte';
  import type { Page } from '$lib/graphql/types';

  import RawHtml from '$components/raw-html/raw-html.svelte';

  import './landing-page.css';

  export let data: { page: Page };
</script>

<main class="contain page">
  {#if data.page}
    <!-- <Heading level="2" display="3">{data.page.title}</Heading> -->
    <RawHtml as="div" class="landing-page contain" content={data.page.content}
    ></RawHtml>
  {:else}
    <p>No content found.</p>
  {/if}
</main>

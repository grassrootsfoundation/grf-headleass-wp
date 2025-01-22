<script lang="ts">
  import type { GetArticleQuery } from '$lib/graphql/types';

  import RawHtml from '$components/raw-html/raw-html.svelte';

  import './page.css';

  export let data: { post: GetArticleQuery['postBy'] };
</script>

<main class="article contain page">
  <div class="content">
    <section>
      {#if data.post}
        <div class="title-block">
          <span class="title-tag"> Club Soccer </span>
          <h1>{data.post.title}</h1>
        </div>
        <RawHtml as="div" class="body-content" content={data.post.content}
        ></RawHtml>
      {/if}
    </section>
  </div>
  <div class="flex-1 h-screen relative top-24">
    <aside>
      <div class="table-of-contents">
        <!-- <h4>Topic Title</h4> -->
        <a href="/" title="">Link1</a>
        <a href="/" title="">Link1</a>
        <a href="/" title="">Link1</a>
        <a href="/" title="">Link1</a>
        <a href="/" title="">Link1</a>
        <a href="/" title="">Link1</a>
        <a href="/" title="">Link1</a>
      </div>
    </aside>
  </div>
</main>

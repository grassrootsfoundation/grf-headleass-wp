<script lang="ts" context="module">
  export interface SEOProps {
    description?: string;
    image?: string;
    page?: string;
    title?: string;
    url?: string;
  }
</script>

<script lang="ts">
  import RawHTML from '$components/raw-html/raw-html.svelte';

  export let description: SEOProps['description'] =
    'Description of your website.';
  export let image: SEOProps['image'] = 'https://example.com/your-logo.png';
  export let page: SEOProps['page'] = 'About';
  export let title: SEOProps['title'] = 'Home | Example.com';
  export let url: SEOProps['url'] = 'https://example.com/';
</script>

<svelte:head>
  <title>{title} | Example.com</title>
  <meta name="description" content={description} />
  <meta property="og_site_name" content="Example.com" />
  <meta property="og:url" content="{url}/{page}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="example.co" />
  <meta property="twitter:url" content="{url}/{page}" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />

  <RawHTML
    as="script"
    class="schema"
    type="application/ld+json"
    content={`{
   "@context": "https://schema.org",
   "@type": "Website",
   "name": "{title} | {url}",
   "url": "${url}/${page}",
   "logo": ${image}  }`}
  />
  <slot />
</svelte:head>

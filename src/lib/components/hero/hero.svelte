<script lang="ts" context="module">
  export interface HeroProps {
    alt?: string;
    className?: string;
    copy?: string;
    subtitle?: string;
    title?: string;
    url?: string;
  }
</script>

<script lang="ts">
  import clsx from '$src/lib/utils/clsx';

  import Text from '$components/text/text.svelte';

  import './hero.css';
  import Image from '../image/image.svelte';

  export let alt: HeroProps['alt'] = undefined,
    copy: HeroProps['copy'] = 'Example copy that will fill the content area.',
    subtitle: HeroProps['subtitle'] = undefined,
    title: HeroProps['title'] = 'Example Title',
    url: HeroProps['url'] = undefined;

  let className: HeroProps['className'] = $$restProps.class;
  export { className as class };
</script>

<div class={clsx('hero', className)}>
  <div class="hero-content">
    <slot name="content"></slot>
    <Text preset="display" size="xl">
      {title}
    </Text>
    {#if subtitle}
      <Text preset="display" size="sm">
        {subtitle}
      </Text>
    {/if}
    <Text>
      {copy}
    </Text>
  </div>
  <!-- <When condition={Boolean(url)}> -->
  <div class="hero-image">
    <slot name="image"></slot>
    <Image {url} {alt} />
  </div>
  <!-- </When> -->
</div>

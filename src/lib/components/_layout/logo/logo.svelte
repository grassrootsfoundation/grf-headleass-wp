<script lang="ts" context="module">
  import type { CommonProps } from '$types/component';
  import type { TSizeLabel } from '$types/size';
  export interface LogoProps extends CommonProps {
    appearance?: 'light' | 'dark';
    variant?: 'icon' | 'acronym' | 'text-center' | 'text' | 'default';
    size?: Extract<TSizeLabel, 'xs' | 'sm' | 'md' | 'lg'>;
  }
</script>

<script lang="ts">
  import clsx from '$utils/clsx';

  import LogoAcronym from './_logo-acronym.svelte';
  import LogoIcon from './_logo-icon.svelte';
  import LogoTextCenter from './_logo-text-center.svelte';
  import LogoText from './_logo-text.svelte';
  import LogoDefault from './_logo.svelte';

  import './logo.css';

  export let appearance: LogoProps['appearance'] = 'dark',
    size: LogoProps['size'] = undefined,
    variant: LogoProps['variant'] = undefined;

  let className: LogoProps['className'] = $$restProps.class;
  export { className as class };
</script>

<div
  class={clsx('logo', className)}
  data-appearance={appearance}
  data-size={size}>
  {#if variant === 'acronym'}
    <LogoAcronym />
  {:else if variant === 'text-center'}
    <LogoTextCenter />
  {:else if variant === 'text'}
    <LogoText />
  {:else if variant === 'icon'}
    <LogoIcon />
  {:else}
    <LogoDefault />
  {/if}
</div>

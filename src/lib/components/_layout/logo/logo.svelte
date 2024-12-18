<script lang="ts" context="module">
  export interface LogoProps {
    appearance?: 'light' | 'dark';
    className?: string;
    variant?: 'icon' | 'acronym' | 'text-center' | 'text';
    size?: Extract<SizeProp, 'xs' | 'sm' | 'md' | 'lg'>;
  }
</script>

<script lang="ts">
  import clsx from '$utils/clsx';
  import { generateCustomProperties, inlineStyles } from '$utils/components';

  import LogoAcronym from './_logo-acronym.svelte';
  import LogoIcon from './_logo-icon.svelte';
  import LogoTextCenter from './_logo-text-center.svelte';
  import LogoText from './_logo-text.svelte';

  import type { SizeProp } from '$types/component';
  import type { ResponsiveConfig } from '$types/responsive-config';

  import './logo.css';

  export let appearance: LogoProps['appearance'] = 'dark',
    size: LogoProps['size'] = undefined,
    variant: LogoProps['variant'] = undefined;

  let className: LogoProps['className'] = $$restProps.class;
  export { className as class };

  const config: ResponsiveConfig = {
    size: { name: 'logo-size', category: 'size' },
  };

  const mergedStyles = inlineStyles(
    generateCustomProperties(
      {
        size,
      },
      config
    )
  );
</script>

<div
  class={clsx('logo', className)}
  data-appearance={appearance}
  data-size={size}
  style={mergedStyles}>
  {#if variant === 'acronym'}
    <LogoAcronym />
  {:else if variant === 'text-center'}
    <LogoTextCenter />
  {:else if variant === 'text'}
    <LogoText />
  {:else}
    <LogoIcon />
  {/if}
</div>

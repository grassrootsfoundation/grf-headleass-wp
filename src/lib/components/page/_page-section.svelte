<script lang="ts" context="module">
  export interface PageSectionProps extends CommonStyledProps {
    as?: keyof HTMLElementTagNameMap;
    container?: 'prose' | 'page' | 'none';
  }
</script>

<script lang="ts">
  import './page.css';

  import type { ResponsiveConfig } from '$src/lib/types/responsive-config';

  import clsx from '$utils/clsx';
  import {
    generateResponsiveCSSProperties,
    inlineStyles,
  } from '$utils/components';

  import type { CommonStyledProps } from '$types/component';

  export let as: PageSectionProps['as'] = 'div',
    container: PageSectionProps['container'] = 'page',
    spacingBlockEnd: PageSectionProps['spacingBlockEnd'] = 'none',
    spacingBlockStart: PageSectionProps['spacingBlockStart'] = 'none';

  let className: PageSectionProps['className'] = $$restProps.class;
  export { className as class };

  const config: ResponsiveConfig = {
    spacingBlockEnd: { name: 'page-section-block-end', category: 'size' },
    spacingBlockStart: { name: 'page-section-block-start', category: 'size' },
  };

  const mergedStyles = inlineStyles(
    generateResponsiveCSSProperties(
      { spacingBlockEnd, spacingBlockStart },
      config
    )
  );
</script>

<svelte:element
  this={as}
  class={clsx('page-section', className)}
  data-container={container}
  style={mergedStyles}
  {...$$restProps}
>
  <slot />
</svelte:element>

<script lang="ts" context="module">
  export interface GenericBlockProps extends CommonStyledProps {
    as?: keyof HTMLElementTagNameMap;
    appearance?: 'card' | 'tile';
  }
</script>

<script lang="ts">
  import './generic-block.css';

  import clsx from '$utils/clsx';
  import {
    generateResponsiveCSSProperties,
    inlineStyles,
  } from '$utils/components';

  import type { CommonStyledProps } from '$types/component';
  import type { ResponsiveConfig } from '$types/responsive-config';

  export let appearance: GenericBlockProps['appearance'] = undefined,
    as: GenericBlockProps['as'] = 'div',
    bgColor: GenericBlockProps['bgColor'] = undefined,
    borderColor: GenericBlockProps['borderColor'] = undefined,
    color: GenericBlockProps['color'] = undefined,
    gap: GenericBlockProps['gap'] = undefined,
    shadow: GenericBlockProps['shadow'] = undefined,
    spacingBlockEnd: GenericBlockProps['spacingBlockEnd'] = undefined,
    spacingBlockStart: GenericBlockProps['spacingBlockStart'] = undefined,
    radius: GenericBlockProps['radius'] = undefined;

  let className: GenericBlockProps['className'] = $$restProps.class;
  export { className as class };

  const config: ResponsiveConfig = {
    bgColor: { name: 'block-bg-color', category: 'color' },
    borderColor: { name: 'block-border-color', category: 'color' },
    color: { name: 'block-color', category: 'color' },
    gap: { name: 'block-gap', category: 'size' },
    radius: { name: 'block-radius', category: 'radius' },
    shadow: { name: 'block-shadow', category: 'shadow' },
    spacingBlockEnd: { name: 'block-spacing-block-end', category: 'size' },
    spacingBlockStart: { name: 'block-spacing-block-start', category: 'size' },
  };

  const mergedStyles = inlineStyles(
    generateResponsiveCSSProperties(
      {
        bgColor,
        borderColor,
        color,
        gap,
        radius,
        shadow,
        spacingBlockEnd,
        spacingBlockStart,
      },
      config
    )
  );
</script>

<svelte:element
  this={as}
  class={clsx('generic-block', className)}
  data-appearance={appearance}
  style={mergedStyles}
  {...$$restProps}>
  <slot />
</svelte:element>

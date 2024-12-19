<script lang="ts" context="module">
  export interface ListProps {
    className?: string;
    position?: TListPosition;
    type?: TListType;
  }
</script>

<script lang="ts">
  import './list.css';

  import clsx from '$utils/clsx';
  import {
    generateResponsiveCSSProperties,
    inlineStyles,
  } from '$utils/components';

  import type { TListPosition, TListType } from '$types/list';
  import type { ResponsiveConfig } from '$types/responsive-config';

  export let position: ListProps['position'] = undefined,
    type: ListProps['type'] = undefined;

  let className: ListProps['className'] = $$restProps.class;
  export { className as class };

  const as = type === 'decimal' ? 'ol' : 'ul';

  const config: ResponsiveConfig = {
    position: { name: 'list-position', category: 'list' },
    type: { name: 'list-type', category: 'list' },
  };

  const mergedStyles = inlineStyles(
    generateResponsiveCSSProperties(
      {
        position,
        type,
      },
      config
    )
  );
</script>

<svelte:element
  this={as}
  class={clsx('list', className)}
  style={mergedStyles}
  {...$$restProps}>
  <slot />
</svelte:element>

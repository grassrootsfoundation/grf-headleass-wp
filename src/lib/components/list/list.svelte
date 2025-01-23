<script lang="ts" context="module">
  export interface ListProps {
    className?: string;
    position?: TListPosition;
    listStyle?: TListType;
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
    listStyle: ListProps['listStyle'] = undefined;

  let className: ListProps['className'] = $$restProps.class;
  export { className as class };

  const as = listStyle === 'ordered' ? 'ol' : 'ul';

  const config: ResponsiveConfig = {
    position: { name: 'list-position', category: 'list' },
    listStyle: { name: 'list-type', category: 'list' },
  };

  const mergedStyles = inlineStyles(
    generateResponsiveCSSProperties(
      {
        position,
        listStyle,
      },
      config
    )
  );
</script>

<svelte:element
  this={as}
  class={clsx('list', className)}
  style={mergedStyles}
  {...$$restProps}
>
  <slot />
</svelte:element>

<script lang="ts" context="module">
  import type { CommonProps } from '$types/component';
  import type { THeadingLevel } from '$types/text';

  export interface HeadingProps extends CommonProps {
    display?: THeadingLevel;
    level?: THeadingLevel;
    preset?: 'prose' | 'page';
  }
</script>

<script lang="ts">
  import clsx from '$utils/clsx';

  import './heading.css';

  export let display: HeadingProps['display'] = '1',
    level: HeadingProps['level'] = '1';

  let className: HeadingProps['className'] = $$restProps.class;
  export { className as class };
</script>

<svelte:element
  this={`h${level}`}
  data-display={display}
  class={clsx('heading', className)}
  {...$$restProps}
>
  <slot />
</svelte:element>

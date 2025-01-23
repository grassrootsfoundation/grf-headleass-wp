<script lang="ts" context="module">
  import type { CommonProps } from '$src/lib/types/component';

  import type { TTextPreset, TTextSize } from '$types/text';
  export interface TextProps extends CommonProps {
    as?: keyof HTMLElementTagNameMap;
    preset?: TTextPreset;
    size: TTextSize;
  }
</script>

<script lang="ts">
  import clsx from '$utils/clsx';

  import './text.css';

  export let as: TextProps['as'] = 'div',
    preset: TextProps['preset'] = 'caption',
    size: TextProps['size'] = 'md';

  let className: TextProps['className'] = $$restProps.class;
  export { className as class };
</script>

<svelte:element
  this={as}
  data-preset={preset}
  data-size={size}
  class={clsx('text', className)}
  {...$$restProps}
>
  <slot />
</svelte:element>

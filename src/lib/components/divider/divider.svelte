<script lang="ts" context="module">
  export interface DividerProps {
    appearance?: 'solid' | 'dotted' | 'dashed';
    className?: string;
    color?: TColor;
    gap?: TSize;
    height?: TSize;
    spacing?: TSize;
    width?: TSize;
  }
</script>

<script lang="ts">
  import './divider.css';

  import clsx from '$utils/clsx';
  import { generateCustomProperties, inlineStyles } from '$utils/components';

  import type { TColor } from '$types/color';
  import type { ResponsiveConfig } from '$types/responsive-config';
  import type { TSize } from '$types/size';

  export let appearance: DividerProps['appearance'] = undefined,
    color: DividerProps['color'] = undefined,
    gap: DividerProps['gap'] = undefined,
    height: DividerProps['height'] = undefined,
    spacing: DividerProps['spacing'] = undefined,
    width: DividerProps['width'] = undefined;

  let className: DividerProps['className'] = $$restProps.class;
  export { className as class };

  const config: ResponsiveConfig = {
    color: { name: 'divider-color', category: 'color' },
    gap: { name: 'divider-gap', category: 'size' },
    height: { name: 'divider-height', category: 'size' },
    spacing: { name: 'divider-spacing', category: 'size' },
    width: { name: 'divider-width', category: 'size' },
  };

  const mergedStyles = inlineStyles(
    generateCustomProperties(
      {
        color,
        gap,
        height,
        spacing,
        width,
      },
      config
    )
  );
</script>

<div
  class={clsx('divider', className)}
  data-appearance={appearance}
  style={mergedStyles}
  {...$$restProps}>
</div>

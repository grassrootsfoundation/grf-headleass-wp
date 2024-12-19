<script lang="ts" context="module">
  import type { TColor } from '$types/color';
  import type { ResponsiveConfig } from '$types/responsive-config';
  import type {
    TFontWeight,
    THeadingLevel,
    TLeading,
    TTextAlign,
    TTextSize,
    TTracking,
  } from '$types/text';
  export interface HeadingProps {
    align?: TTextAlign;
    color?: TColor;
    display?: THeadingLevel;
    level?: THeadingLevel;
    leading?: TLeading;
    textSize?: TTextSize;
    tracking?: TTracking;
    weight?: TFontWeight;
  }
</script>

<script lang="ts">
  import {
    generateResponsiveCSSProperties,
    inlineStyles,
  } from '$utils/components';

  import './heading.css';

  export let align: HeadingProps['align'] = undefined,
    color: HeadingProps['color'] = undefined,
    display: HeadingProps['display'] = '1',
    leading: HeadingProps['leading'] = undefined,
    level: HeadingProps['level'] = '1',
    textSize: HeadingProps['textSize'] = undefined,
    tracking: HeadingProps['tracking'] = undefined,
    weight: HeadingProps['weight'] = undefined;

  const config: ResponsiveConfig = {
    align: { name: 'heading-text-align', category: 'text-align' },
    color: { name: 'heading-color', category: 'color' },
    leading: { name: 'heading-leading', category: 'leading' },
    textSize: { name: 'heading-text-size', category: 'text' },
    tracking: { name: 'heading-tracking', category: 'color' },
    weight: { name: 'heading-font-weight', category: 'font-weight' },
  };

  const mergedStyles = inlineStyles(
    generateResponsiveCSSProperties(
      {
        align,
        color,
        leading,
        textSize,
        tracking,
        weight,
      },
      config
    )
  );
</script>

<svelte:element
  this={`h${level}`}
  data-level={display}
  style={mergedStyles}
  class="heading"
  {...$$restProps}>
  <slot />
</svelte:element>

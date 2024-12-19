<script lang="ts" context="module">
  import type { TColor } from '$types/color';
  import type {
    TFontFamily,
    TFontWeight,
    TLeading,
    TTextAlign,
    TTextPreset,
    TTextSize,
    TTracking,
    TTransform,
  } from '$types/text';
  export interface TextProps {
    as?: keyof HTMLElementTagNameMap;
    align?: TTextAlign;
    className?: string;
    color?: TColor;
    family?: TFontFamily;
    leading?: TLeading;
    preset?: TTextPreset;
    size?: TTextSize;
    tracking?: TTracking;
    underline?: boolean;
    transform?: TTransform;
    weight?: TFontWeight;
  }
</script>

<script lang="ts">
  import clsx from '$utils/clsx';
  import { definedProps, inlineStyles } from '$utils/components';
  import { tok } from '$utils/style';

  import './text.css';

  const PRESET_PROPS: Record<string, Partial<TextProps>> = {
    caption: { leading: 'snug' },
    display: { leading: 'tight', tracking: 'tight', weight: 'semibold' },
    default: {},
  };

  export let align: TextProps['align'] = undefined,
    as: TextProps['as'] = 'div',
    color: TextProps['color'] = undefined,
    leading: TextProps['leading'] = undefined,
    family: TextProps['family'] = undefined,
    preset: TextProps['preset'] = undefined,
    size: TextProps['size'] = undefined,
    tracking: TextProps['tracking'] = undefined,
    underline: TextProps['underline'] = undefined,
    transform: TextProps['transform'] = undefined,
    weight: TextProps['weight'] = undefined;

  let className: TextProps['className'] = $$restProps.class;
  export { className as class };

  function generateResponsiveCSSProperties(props: TextProps) {
    const { align, color, leading, preset, size, tracking, transform, weight } =
      props;
    const vars: Record<string, string> = {};

    // Add tokens for each style property
    if (align) vars['--text-align'] = align;
    if (color) vars['--text-color'] = tok('color', color);
    if (leading) vars['--text-leading'] = tok('leading', leading);

    if (size) {
      const sizeKey =
        preset === 'display'
          ? 'text-display'
          : preset === 'prose'
            ? 'text-prose'
            : preset === 'caption'
              ? 'text-caption'
              : 'text';
      vars['--text-font-size'] = tok(sizeKey, size);
    }

    if (tracking) vars['--text-tracking'] = tok('tracking', tracking);
    if (transform) vars['--text-transform'] = transform;
    if (weight) vars['--text-font-weight'] = tok('font-weight', weight);

    return vars;
  }

  const mergedStyles = inlineStyles(
    generateResponsiveCSSProperties({
      ...PRESET_PROPS[preset || 'default'],
      ...definedProps({
        align,
        color,
        family,
        leading,
        preset,
        size,
        tracking,
        transform,
        weight,
      }),
    })
  );
</script>

<svelte:element
  this={as}
  class={clsx('text', className)}
  data-underline={underline}
  style={mergedStyles}
  {...$$restProps}>
  <slot />
</svelte:element>

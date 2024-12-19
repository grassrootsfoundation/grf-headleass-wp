<script lang="ts" context="module">
  export interface BadgeProps {
    bgColor?: TColor;
    className?: string;
    color?: TColor;
    content?: HTMLSpanElement;
    intent?: Extract<TIntent, 'success' | 'error' | 'warning' | 'info'>;
    radius?: TRadius;
    shadow?: TShadow;
    size?: TSize;
    textSize?: TTextSize;
    visible: boolean;
  }
</script>

<script lang="ts">
  import './badge.css';

  import clsx from '$utils/clsx';
  import {
    generateResponsiveCSSProperties,
    inlineStyles,
  } from '$utils/components';

  import type { TColor } from '$types/color';
  import type { TIntent } from '$types/intent';
  import type { TRadius } from '$types/radius';
  import type { ResponsiveConfig } from '$types/responsive-config';
  import type { TShadow } from '$types/shadow';
  import type { TSize } from '$types/size';
  import type { TTextSize } from '$types/text';

  export let bgColor: BadgeProps['bgColor'] = undefined,
    color: BadgeProps['color'] = undefined,
    intent: BadgeProps['intent'] = undefined,
    content: BadgeProps['content'] = undefined,
    radius: BadgeProps['radius'] = undefined,
    shadow: BadgeProps['shadow'] = undefined,
    size: BadgeProps['size'] = '4',
    textSize: BadgeProps['textSize'] = undefined;

  let className: BadgeProps['className'] = $$restProps.class;
  export { className as class };

  const config: ResponsiveConfig = {
    bgColor: { name: 'badge-bg-color', category: 'color' },
    color: { name: 'badge-color', category: 'color' },
    radius: { name: 'badge-radius', category: 'radius' },
    shadow: { name: 'badge-shadow', category: 'shadow' },
    size: { name: 'badge-size', category: 'size' },
    textSize: { name: 'badge-text-size', category: 'text' },
  };

  const mergedStyles = inlineStyles(
    generateResponsiveCSSProperties(
      {
        bgColor,
        color,
        radius,
        shadow,
        size,
        textSize,
      },
      config
    )
  );
</script>

<div
  class={clsx('badge', className)}
  data-intent={intent}
  style={mergedStyles}
  {...$$restProps}>
  <span bind:this={content}>
    <slot />
  </span>
</div>

<script lang="ts" context="module">
  export interface AvatarProps {
    name?: string;
    bgColor?: TColor;
    className?: string;
    color?: TColor;
    textSize?: TTextSize;
    shape?: Extract<TShape, 'square' | 'circle'> | 'rounded';
    size?: TSize;
    url?: string;
  }
</script>

<script lang="ts">
  import clsx from '$utils/clsx';
  import {
    generateResponsiveCSSProperties,
    inlineStyles,
  } from '$utils/components';
  import { createInitials } from '$utils/create-initials';

  import Image from '$components/image/image.svelte';
  import Text from '$components/text/text.svelte';

  import './avatar.css';

  import type { TColor } from '$types/color';
  import type { ResponsiveConfig } from '$types/responsive-config';
  import type { TShape } from '$types/shape';
  import type { TSize } from '$types/size';
  import type { TTextSize } from '$types/text';

  export let bgColor: AvatarProps['bgColor'] = undefined,
    color: AvatarProps['color'] = undefined,
    name: AvatarProps['name'] = 'Avatar',
    shape: AvatarProps['shape'] = undefined,
    size: AvatarProps['size'] = undefined,
    textSize: AvatarProps['textSize'] = undefined,
    url: AvatarProps['url'] = undefined;

  let className: AvatarProps['className'] = $$restProps.class;
  export { className as class };

  const config: ResponsiveConfig = {
    bgColor: { name: 'avatar-bg-color', category: 'color' },
    color: { name: 'avatar-color', category: 'color' },
    size: { name: 'avatar-size', category: 'size' },
    textSize: { name: 'avatar-text-size', category: 'text' },
  };

  const mergedStyles = inlineStyles(
    generateResponsiveCSSProperties(
      {
        bgColor,
        color,
        size,
        textSize,
      },
      config
    )
  );
</script>

<div
  class={clsx('avatar', className)}
  data-shape={shape}
  style={mergedStyles}
  {...$$restProps}>
  {#if url}
    <Image alt={name} {url} fill={true} cover={true} />
  {:else}
    <Text as="p" weight="bold">{createInitials(name, 2)}</Text>
  {/if}
</div>

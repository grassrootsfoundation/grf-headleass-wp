<script lang="ts" context="module">
  export interface ImageProps extends CommonProps {
    alt?: string;
    aspectRatio?: TAspectRatio;
    cover?: boolean;
    fill?: boolean;
    radius?: TRadius;
    url?: string;
  }
</script>

<script lang="ts">
  import './image.css';

  import clsx from '$utils/clsx';
  import {
    generateResponsiveCSSProperties,
    inlineStyles,
  } from '$utils/components';

  import When from '$components/when/when.svelte';

  import type { TAspectRatio } from '$types/aspect-ratio';
  import type { CommonProps } from '$types/component';
  import type { TRadius } from '$types/radius';
  import type { ResponsiveConfig } from '$types/responsive-config';

  export let alt: ImageProps['alt'],
    aspectRatio: ImageProps['aspectRatio'] = undefined,
    cover: ImageProps['cover'] = undefined,
    fill: ImageProps['fill'] = undefined,
    radius: ImageProps['radius'] = undefined,
    url: ImageProps['url'];

  let className: ImageProps['className'] = $$restProps.class;
  export { className as class };

  const config: ResponsiveConfig = {
    radius: { name: 'image-radius', category: 'radius' },
  };

  const mergedStyles = inlineStyles(
    generateResponsiveCSSProperties(
      {
        radius,
      },
      config
    )
  );
</script>

<When condition={Boolean(url?.length)}>
  <div
    class={clsx('image', className)}
    data-aspect-ratio={aspectRatio}
    data-cover={cover}
    data-fill={fill}
    data-title={alt}
    style={mergedStyles}
  >
    <img src={url} {alt} {...$$restProps} />
  </div>
</When>

<script lang="ts" context="module">
  export interface TagProps {
    color?: string;
    bgColor?: string;
  }
</script>

<script lang="ts">
  import './tag.css';

  import { generateCustomProperties, inlineStyles } from '$utils/components';

  import type { ResponsiveConfig } from '$types/responsive-config';

  export let color: TagProps['color'] = undefined,
    bgColor: TagProps['bgColor'] = undefined;

  const config: ResponsiveConfig = {
    bgColor: { name: 'tag-bg-color', category: 'color' },
    color: { name: 'tag-color', category: 'color' },
  };

  const mergedStyles = inlineStyles(
    generateCustomProperties(
      {
        bgColor,
        color,
      },
      config
    )
  );
</script>

<div class="tag" style={mergedStyles} {...$$restProps}>
  <slot />
</div>

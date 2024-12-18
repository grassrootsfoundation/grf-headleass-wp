<script lang="ts" context="module">
  export interface AlertProps {
    bgColor?: TColor;
    className?: string;
    color?: TColor;
    icon?: string;
    intent?: Extract<TIntent, 'success' | 'error' | 'warning' | 'info'>;
    onDismiss?: () => void;
    radius?: TRadius;
    shadow?: TShadow;
    spacing?: TSize;
    textSize?: TTextSize;
    visible: boolean;
  }
</script>

<script lang="ts">
  import { fade } from 'svelte/transition';

  import clsx from '$utils/clsx';
  import { generateCustomProperties, inlineStyles } from '$utils/components';

  import UnstyledButton from '$components/button/button-unstyled.svelte';
  import Text from '$components/text/text.svelte';
  import When from '$components/when/when.svelte';

  import './alert.css';

  import type { TColor } from '$types/color';
  import type { TIntent } from '$types/intent';
  import type { TRadius } from '$types/radius';
  import type { ResponsiveConfig } from '$types/responsive-config';
  import type { TShadow } from '$types/shadow';
  import type { TSize } from '$types/size';
  import type { TTextSize } from '$types/text';

  export let bgColor: AlertProps['bgColor'] = undefined,
    color: AlertProps['color'] = undefined,
    icon: AlertProps['icon'] = undefined,
    intent: AlertProps['intent'] = undefined,
    radius: AlertProps['radius'] = undefined,
    shadow: AlertProps['shadow'] = undefined,
    spacing: AlertProps['spacing'] = undefined,
    textSize: AlertProps['textSize'] = undefined,
    onDismiss: AlertProps['onDismiss'] = undefined,
    visible: AlertProps['visible'] = false;

  let className: AlertProps['className'] = $$restProps.class;
  export { className as class };

  const config: ResponsiveConfig = {
    bgColor: { name: 'alert-bg-color', category: 'color' },
    color: { name: 'alert-color', category: 'color' },
    radius: { name: 'alert-radius', category: 'radius' },
    shadow: { name: 'alert-shadow', category: 'shadow' },
    spacing: { name: 'alert-spacing', category: 'size' },
    textSize: { name: 'alert-text-size', category: 'text' },
  };

  const mergedStyles = inlineStyles(
    generateCustomProperties(
      {
        bgColor,
        color,
        radius,
        shadow,
        spacing,
        textSize,
      },
      config
    )
  );

  function handleClick() {
    visible = !visible;
    if (onDismiss !== undefined) {
      onDismiss();
    }
  }
</script>

<When condition={Boolean(visible)}>
  <div
    class={clsx('alert', onDismiss && 'alert-dismissable', className)}
    data-intent={intent}
    style={mergedStyles}
    transition:fade>
    <Text as="p" weight="medium">
      <slot />
    </Text>
    <When condition={Boolean(onDismiss)}>
      <UnstyledButton class="alert-close-button" on:click={handleClick}>
        {#if icon}
          {icon}
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
            ></path>
          </svg>
        {/if}
      </UnstyledButton>
    </When>
  </div>
</When>

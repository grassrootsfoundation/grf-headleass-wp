<script lang="ts" context="module">
  import type { TSizeLabel } from '$types/size';

  export interface ButtonProps extends CommonStyledProps {
    active?: boolean;
    appearance?:
      | 'primary'
      | 'secondary'
      | 'tertiary'
      | 'dark'
      | 'light'
      | 'minimal'
      | 'link';
    busy?: boolean;
    fill?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    invert?: boolean;
    shape?: 'square' | 'circle' | 'pill' | 'rounded';
    size?: Extract<TSizeLabel, 'xs' | 'sm' | 'md' | 'lg'>;
    underline?: boolean;
    variant?: 'pill' | 'rounded';
  }
</script>

<script lang="ts">
  import './button.css';

  import clsx from '$utils/clsx';

  import Spinner from '$components/spinner/spinner.svelte';
  import When from '$components/when/when.svelte';

  import type { CommonStyledProps } from '$types/component';

  export let active: ButtonProps['active'] = undefined,
    appearance: ButtonProps['appearance'] = undefined,
    busy: ButtonProps['busy'] = undefined,
    fill: ButtonProps['fill'] = undefined,
    disabled: ButtonProps['disabled'] = undefined,
    hidden: ButtonProps['hidden'] = undefined,
    invert: ButtonProps['invert'] = undefined,
    shape: ButtonProps['shape'] = undefined,
    size: ButtonProps['size'] = 'md' as Extract<
      TSizeLabel,
      'xs' | 'sm' | 'md' | 'lg'
    >,
    variant: ButtonProps['variant'] = undefined;

  let className: ButtonProps['className'] = $$restProps.class;
  export { className as class };

  /**
   * Determines the size of the spinner based on the size of
   * the button.
   */
  function getSpinnerSize(size: ButtonProps['size']): ButtonProps['size'] {
    switch (size) {
      case 'xs':
        return 'xs';
      case 'sm':
        return 'xs';
      case 'md':
        return 'sm';
      case 'lg':
        return 'md';
      default:
        return 'md';
    }
  }
  /**
   * Determines if the spinner should be inverted or not.
   */
  function getSpinnerInvertedness(invert: ButtonProps['invert']): boolean {
    let inverted = invert;
    switch (appearance) {
      case 'primary':
        return inverted ? false : true;
      case 'secondary':
        return inverted ? true : false;
      case 'minimal':
        return inverted ? true : false;
      case 'link':
        return inverted ? true : false;
      default:
        return false;
    }
  }
</script>

<When condition={$$restProps.href}>
  <a
    href={$$restProps.href}
    class={clsx('button', className)}
    data-active={active}
    data-appearance={appearance}
    data-busy={busy}
    data-disabled={disabled}
    data-fill={fill}
    data-invert={invert}
    data-shape={shape}
    data-size={size}
    data-variant={variant}
    {hidden}
    {...$$restProps}>
    <When condition={Boolean($$slots && $$slots.default)}>
      <span class="button-text">
        <slot />
      </span>
    </When>

    <When condition={Boolean(busy)}>
      <div class="button-spinner">
        <Spinner
          size={getSpinnerSize(size)}
          invert={getSpinnerInvertedness(invert)} />
      </div>
    </When>
  </a>
</When>
<When condition={!$$restProps.href}>
  <button
    class={clsx('button', className)}
    on:click
    on:mouseover
    on:focus
    on:mouseenter
    on:mouseleave
    data-active={active}
    data-appearance={appearance}
    data-busy={busy}
    data-disabled={disabled}
    data-fill={fill}
    data-invert={invert}
    data-shape={shape}
    data-size={size}
    data-variant={variant}
    {hidden}
    {...$$restProps}>
    <When condition={Boolean($$slots && $$slots.default)}>
      <span class="button-text">
        <slot />
      </span>
    </When>

    <When condition={Boolean(busy)}>
      <div class="button-spinner">
        <Spinner
          size={getSpinnerSize(size)}
          invert={getSpinnerInvertedness(invert)} />
      </div>
    </When>
  </button>
</When>

<script lang="ts" context="module">
  export interface ButtonUnstyledProps {
    className?: string;
  }
</script>

<script lang="ts">
  import './button-unstyled.css';

  let className: ButtonUnstyledProps['className'] = $$restProps.class;
  export { className as class };
</script>

<button
  class="button-unstyled {className}"
  on:click
  on:mouseover
  on:focus
  on:mouseenter
  on:mouseleave
  {...$$restProps}>
  <slot />
</button>

<script lang="ts" context="module">
  export interface TableProps {
    styled?: boolean;
  }
</script>

<script lang="ts">
  import './table.css';

  export let styled: TableProps['styled'] = false;
</script>

<table class="table" data-styled={styled} {...$$restProps}>
  <slot />
</table>

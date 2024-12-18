<script lang="ts" context="module">
  export interface TruncateProps {
    lines?: number;
    title?: string;
  }
</script>

<script lang="ts">
  import './truncate.css';

  export let lines: TruncateProps['lines'] = undefined,
    title: TruncateProps['title'] = undefined;
</script>

<div class="truncate" style:--truncate-line-limit={lines} {title}>
  <slot />
</div>

<script lang="ts" context="module">
  import type { TSizeLabel } from '$types/size';
  export interface SpinnerProps {
    invert?: boolean;
    size?: Extract<TSizeLabel, 'xs' | 'sm' | 'md' | 'lg'>;
  }
</script>

<script lang="ts">
  import './spinner.css';

  export let invert: SpinnerProps['invert'] = false,
    size: SpinnerProps['size'] = undefined;
</script>

<div class="spinner" data-invert={invert} data-size={size} role="progressbar">
  <div></div>
</div>

<script lang="ts" context="module">
	export interface SkeletonProps {
		loading: boolean;
		width?: string;
		className?: string;
	}
</script>

<script lang="ts">
	import { fade } from 'svelte/transition';

	import clsx from '$utils/clsx';

	import './skeleton.css';

	export let loading: SkeletonProps['loading'] = false,
		width: SkeletonProps['width'] = '100%';

	let className: SkeletonProps['className'] = $$restProps.class ?? '';
	export { className as class };
</script>

{#if loading}
	<div class={clsx('skeleton', className)} transition:fade style:--skeleton-width={width}>
		<slot />
	</div>
{/if}

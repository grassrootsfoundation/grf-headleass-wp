<script lang="ts" context="module">
	export interface ListItemProps {
		className?: string;
	}
</script>

<script lang="ts">
	import clsx from '$utils/clsx';

	import './list.css';

	let className: ListItemProps['className'] = $$restProps.class;
	export { className as class };
</script>

<li class={clsx('list-item', className)} {...$$restProps}>
	<slot />
</li>

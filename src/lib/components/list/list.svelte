<script lang="ts" context="module">
	export interface ListProps {
		className?: string;
		position?: TListPosition;
		type?: TListType;
	}
</script>

<script lang="ts">
	import clsx from '$utils/clsx';
	import { generateCustomProperties, inlineStyles } from '$utils/components';

	import './list.css';

	import type { TListPosition, TListType } from '$types/list';
	import type { ResponsiveConfig } from '$utils/components';

	export let position: ListProps['position'] = undefined,
		type: ListProps['type'] = undefined;

	let className: ListProps['className'] = $$restProps.class;
	export { className as class };

	const as = type === 'decimal' ? 'ol' : 'ul';

	const config: ResponsiveConfig = {
		position: { name: 'list-position', category: 'list' },
		type: { name: 'list-type', category: 'list' }
	};

	const mergedStyles = inlineStyles(
		generateCustomProperties(
			{
				position,
				type
			},
			config
		)
	);
</script>

<svelte:element this={as} class={clsx('list', className)} style={mergedStyles} {...$$restProps}>
	<slot />
</svelte:element>

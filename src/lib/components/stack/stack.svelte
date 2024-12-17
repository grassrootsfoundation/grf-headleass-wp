<script lang="ts" context="module">
	export interface StackProps {
		align?: TAlign;
		as?: keyof HTMLElementTagNameMap;
		direction?: TDirection;
		gap?: TSize;
		justify?: TJustify;
	}
</script>

<script lang="ts">
	import { tok } from '$utils/style';
	import { toPx } from '$utils/to-pixels';

	import './stack.css';

	import type { TAlign, TDirection, TJustify } from '$types/display';
	import type { TSize } from '$types/size';

	export let align: StackProps['align'] = undefined,
		as: StackProps['as'] = 'div',
		direction: StackProps['direction'] = 'column',
		gap: StackProps['gap'] = tok('size', 2),
		justify: StackProps['justify'] = undefined;
</script>

<svelte:element
	this={as}
	class="stack"
	style:--stack-align={align}
	style:--stack-direction={direction}
	style:--stack-gap={typeof gap === 'number' ? toPx(gap) : gap}
	style:--stack-justify={justify}
	{...$$restProps}
>
	<slot />
</svelte:element>

<script lang="ts" context="module">
	export interface WhenProps {
		condition: boolean;
	}
</script>

<script lang="ts">
	export let condition: WhenProps['condition'];
</script>

{#if condition}
	<slot />
{/if}

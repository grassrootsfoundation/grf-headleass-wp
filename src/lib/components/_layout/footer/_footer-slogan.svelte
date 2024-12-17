<script lang="ts">
	import Logo from '$components/_layout/logo/logo.svelte';
	import Stack from '$components/stack/stack.svelte';
	import Text from '$components/text/text.svelte';

	import { tok } from '$src/lib/utils/style';
</script>

<Stack>
	<a href="/">
		<Stack direction="row" align="center">
			<Logo variant="icon" size="md" />
			<Logo variant="text" size="sm" />
		</Stack>
	</a>

	<div style="max-width: {tok('size', 35)}">
		<Text preset="caption" size="md" weight="semibold">Slogan</Text>
	</div>
</Stack>

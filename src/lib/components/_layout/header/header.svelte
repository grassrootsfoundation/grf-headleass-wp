<script>
	import { global } from '$src/constants';

	import Button from '$components/button/button.svelte';
	import Divider from '$components/divider/divider.svelte';
	import Logo from '$components/_layout/logo/logo.svelte';
	import PageSection from '$components/page/page-section.svelte';
	import Stack from '$components/stack/stack.svelte';

	import { tok } from '$src/lib/utils/style';
</script>

<header class="header">
	<PageSection container>
		<Stack
			direction="row"
			justify="space-between"
			align="center"
			style="padding-top: {tok('size', 2)}; "
		>
			<a href="/" data-title={global.site.long_name}>
				<Logo variant="acronym" size="xs" />
			</a>
			<Stack direction="row" justify="end" style={{ flex: 1 }}>
				<Button appearance="link" href="/about">Guides</Button>
				<Button appearance="link" href="/about">About Us</Button>
				<Button variant="pill" href="/give" color>Give</Button>
			</Stack>
		</Stack>
	</PageSection>
	<Divider size="sm" appearance="solid" />
	<Divider />
</header>

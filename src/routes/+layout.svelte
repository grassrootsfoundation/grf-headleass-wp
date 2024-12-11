<script lang="ts">
	import '@fontsource/almarai';
	import { setUser, user } from '$src/stores/auth';

	import {
		Button,
		ButtonUnstyled,
		GenericBlock,
		Heading,
		Page,
		PageBody,
		PageSection,
		Stack
	} from '@grassrootsfoundation/trusty-ui';

	import Logout from '$src/lib/components/auth/logout/logout.svelte';
	import Login from '$src/lib/components/auth/login/login.svelte';
	import Register from '$src/lib/components/auth/register/register.svelte';

	import '$src/public/globals.css';
	import type { UserDocument } from '$src/types/api-types';

	export let data: { user: UserDocument | null };

	$: setUser(data.user);
</script>

<Page>
	<GenericBlock as="header" spacingBlock="3" spacingInline="3" bgColor="neutral-200">
		<Stack direction="row" align="center" justify="space-between">
			<ButtonUnstyled>
				<Heading level="1" display="5" weight="black">GRF</Heading>
			</ButtonUnstyled>

			{#if $user}
				<Stack direction="row">
					<Button href="/">Home</Button>
					<Button href="/dashboard">Dashboard</Button>
					<Logout />
				</Stack>
			{:else}
				<Stack direction="row">
					<Button variant="pill" appearance="primary" bgColor="blue-400" shadow="xl" href="/">
						Home
					</Button>
					<Login />
					<Register />
				</Stack>
			{/if}
		</Stack>
	</GenericBlock>
	<PageBody>
		<PageSection>
			{#if $user}
				<Heading level="2" display="5">Welcome, {$user.role}!</Heading>
			{:else}
				<Heading level="1" display="1">You are not logged in.</Heading>
			{/if}
		</PageSection>

		<slot />
	</PageBody>
	<GenericBlock as="footer" spacingBlock="8">
		<PageSection>Test Footer</PageSection>
	</GenericBlock>
</Page>

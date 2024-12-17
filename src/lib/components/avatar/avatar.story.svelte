<script lang="ts">
	import Divider from '$components/divider/divider.svelte';
	import Stack from '$components/stack/stack.svelte';

	import Avatar from './avatar.svelte';

	export let Hst;

	const image = 'https://avatarfiles.alphacoders.com/364/364547.png';
</script>

<svelte:component this={Hst.Story} title="Component/Avatar">
	<svelte:component this={Hst.Variant} title="Initials">
		<Stack>
			<Stack direction="row" align="center">
				<Avatar name="Happy Go Lucky" bgColor="teal-300" color="white" />
				<Avatar name="Morgan" bgColor="lime-300" color="neutral-900" size="10" />
				<Avatar name="Adrian Segura" bgColor="deep-purple-200" color="deep-purple-900" size="12" />
			</Stack>

			<Divider appearance="dashed" gap="8" />

			<Stack direction="row" align="center">
				<Avatar name="Happy Go Lucky" shape="rounded" bgColor="teal-300" color="neutral-900" />
				<Avatar name="Morgan" bgColor="lime-300" color="neutral-900" shape="rounded" size="10" />
				<Avatar
					name="Adrian Segura"
					bgColor="deep-purple-200"
					color="deep-purple-900"
					shape="rounded"
					size="12"
				/>
				<Avatar name="Adrian Segura" bgColor="deep-orange-200" shape="rounded" size="14" />
			</Stack>
			<Divider appearance="dashed" gap="8" />
			<Stack direction="row" align="center">
				<Avatar name="Happy Go Lucky" shape="circle" bgColor="teal-300" color="neutral-900" />
				<Avatar name="Morgan" bgColor="lime-300" color="neutral-900" shape="circle" size="10" />
				<Avatar
					name="Adrian Segura"
					bgColor="deep-purple-200"
					color="deep-purple-900"
					shape="circle"
					size="12"
				/>
				<Avatar name="Adrian Segura" bgColor="deep-orange-200" shape="circle" size="14" />
			</Stack>
			<Divider appearance="dashed" gap="8" />
			<Stack direction="row" align="center">
				<Avatar url={image} size="sm" />
				<Avatar url={image} size="10" />
				<Avatar url={image} size="12" />
				<Avatar url={image} size="14" />
			</Stack>
			<Divider appearance="dashed" gap="8" />
			<Stack direction="row" align="center">
				<Avatar url={image} shape="rounded" size="sm" />
				<Avatar url={image} shape="rounded" size="10" />
				<Avatar url={image} shape="rounded" size="12" />
				<Avatar url={image} shape="rounded" size="14" />
			</Stack>
			<Divider appearance="dashed" gap="8" />
			<Stack direction="row" align="center">
				<Avatar url={image} shape="circle" size="sm" />
				<Avatar url={image} shape="circle" size="10" />
				<Avatar url={image} shape="circle" size="12" />
				<Avatar url={image} shape="circle" size="14" />
			</Stack>
		</Stack>
	</svelte:component>
</svelte:component>

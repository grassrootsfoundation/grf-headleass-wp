<script lang="ts">
	import Divider from '$components/divider/divider.svelte';
	import ListItem from '$components/list/list-item.svelte';
	import List from '$components/list/list.svelte';
	import Stack from '$components/stack/stack.svelte';
	import Text from '$components/text/text.svelte';

	import GenericBlock from './generic-block.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/GenericBlock">
	<svelte:component this={Hst.Variant} title="Appearance">
		<GenericBlock spacingInline="6" spacingBlock="9" radius="md" bgColor="neutral-100">
			<Text as="p" preset="display" leading="loose" underline>Properties</Text>
			<List type="decimal">
				<ListItem>
					<Text>
						<Text as="span" weight="bold" color="blue-500">as:</Text>
						an HTML Element as a string
					</Text>
					<List type="disc">
						<ListItem>
							<Text><Text as="span" weight="bold" color="blue-500">as:</Text> accepts</Text>
						</ListItem>
					</List>
				</ListItem>
				<ListItem>
					<Text>Radius: accepts</Text>
				</ListItem>
				<ListItem>
					<Text>Cool Beans</Text>
				</ListItem>
			</List>
		</GenericBlock>

		<Stack gap="6">
			<Stack>
				<Text preset="display">Card</Text>
				<GenericBlock appearance="card" gap="4">
					<Text preset="caption" size="xs" transform="uppercase">Supertitle</Text>
					<Text preset="display">Card Ttitle</Text>
					<Text preset="caption" size="md">Text in a card</Text>
				</GenericBlock>
			</Stack>

			<Divider appearance="dashed" gap="8" />

			<Stack>
				<Text preset="display">Default</Text>
				<GenericBlock
					bgColor="light-blue-50"
					borderColor="light-blue-200"
					spacingBlock="4"
					spacingInline="3"
				>
					<Text preset="caption">
						The generic block has many features and can be used for multiple uses.
					</Text>
				</GenericBlock>
			</Stack>

			<GenericBlock appearance="tile"></GenericBlock>
		</Stack>
	</svelte:component>
</svelte:component>

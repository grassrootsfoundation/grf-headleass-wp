<script lang="ts">
	import Divider from '$components/divider/divider.svelte';
	import GenericBlock from '$components/generic-block/generic-block.svelte';
	import Stack from '$components/stack/stack.svelte';
	import Text from '$components/text/text.svelte';

	import Button from './button.svelte';

	export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Button">
	<svelte:component this={Hst.Variant} title="Appearance">
		<Stack>
			<Text preset="display">Custom Color</Text>

			<Stack direction="row" gap="">
				<Button appearance="primary" bgColor="red-300">Custom Button</Button>
				<Button appearance="primary" color="blue-400" invert>Custom Button Inverted</Button>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />
		<Stack>
			<Text preset="display">Primary</Text>

			<Stack direction="row" gap="">
				<Button appearance="primary">Primary Button</Button>
				<Button appearance="primary" invert>Primary Button Inverted</Button>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Secondary</Text>
			<Stack direction="row" gap="6">
				<GenericBlock appearance="card" bgColor="grey-400">
					<Button appearance="secondary">This is a button</Button>
				</GenericBlock>
				<GenericBlock appearance="card" bgColor="grey-400">
					<Button appearance="secondary" invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Minimal</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="minimal">This is a button</Button>
				</GenericBlock>
				<GenericBlock appearance="card" bgColor="grey-400">
					<Button appearance="minimal" invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Link</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="link" underline={true}>This is a button</Button>
				</GenericBlock>
				<GenericBlock appearance="card" bgColor="grey-400">
					<Button appearance="link" invert underline>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>
	</svelte:component>

	<svelte:component this={Hst.Variant} title="Busy">
		<Stack>
			<Text preset="display">Primary</Text>
			<Stack direction="row">
				<Button appearance="primary" busy>This is a button</Button>
				<Button appearance="primary" busy invert>This is an inverted button</Button>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Secondary</Text>
			<Stack direction="row">
				<GenericBlock appearance="card" bgColor="grey-400">
					<Button appearance="secondary" busy>This is a button</Button>
				</GenericBlock>
				<GenericBlock appearance="card" bgColor="grey-400">
					<Button appearance="secondary" busy invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Minimal</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="minimal" busy>This is a button</Button>
				</GenericBlock>
				<GenericBlock appearance="card" bgColor="grey-400">
					<Button appearance="minimal" busy invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Link</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="link" busy>This is a link</Button>
				</GenericBlock>
				<GenericBlock appearance="card" bgColor="grey-400">
					<Button appearance="link" busy invert>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>
	</svelte:component>

	<svelte:component this={Hst.Variant} title="Disabled">
		<Stack>
			<Text preset="display">Primary</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="primary" disabled>This is a button</Button>
				</GenericBlock>
				<GenericBlock bgColor="grey-400" appearance="card">
					<Button appearance="primary" invert disabled>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Secondary</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="secondary" disabled>This is a button</Button>
				</GenericBlock>
				<GenericBlock appearance="card" bgColor="grey-400">
					<Button appearance="secondary" invert disabled>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Minimal</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="minimal" disabled>This is a button</Button>
				</GenericBlock>
				<GenericBlock appearance="card" bgColor="grey-400">
					<Button appearance="minimal" invert disabled>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Link</Text>
			<Stack direction="row">
				<GenericBlock appearance="card">
					<Button appearance="link" disabled underline>This is a link</Button>
				</GenericBlock>
				<GenericBlock appearance="card" bgColor="grey-400">
					<Button appearance="link" invert disabled underline>This is an inverted button</Button>
				</GenericBlock>
			</Stack>
		</Stack>
	</svelte:component>

	<svelte:component this={Hst.Variant} title="Size">
		<Stack>
			<Text preset="display">Primary</Text>
			<Stack direction="row" align="center">
				<Button appearance="primary" size="xs">X-Small</Button>
				<Button appearance="primary" size="sm">Small</Button>
				<Button appearance="primary" size="md">Medium</Button>
				<Button appearance="primary" size="lg">Large</Button>
			</Stack>
			<Text preset="display">Primary with Icon</Text>
			<Stack direction="row" align="center">
				<Button appearance="primary" size="xs">X-Small</Button>
				<Button appearance="primary" size="sm">Small</Button>
				<Button appearance="primary" size="md">Medium</Button>
				<Button appearance="primary" size="lg">Large</Button>
			</Stack>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Primary inverted</Text>

			<Stack direction="row" align="center">
				<Button appearance="primary" size="xs" invert>X-Small</Button>
				<Button appearance="primary" size="sm" invert>Small</Button>
				<Button appearance="primary" size="md" invert>Medium</Button>
				<Button appearance="primary" size="lg" invert>Large</Button>
			</Stack>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Primary inverted with Icon</Text>

			<Stack direction="row" align="center">
				<Button appearance="primary" size="xs" invert>X-Small</Button>
				<Button appearance="primary" size="sm" invert>Small</Button>
				<Button appearance="primary" size="md" invert>Medium</Button>
				<Button appearance="primary" size="lg" invert>Large</Button>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Secondary</Text>
			<GenericBlock bgColor="grey-400" appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="secondary" size="xs">X-Small</Button>
					<Button appearance="secondary" size="sm">Small</Button>
					<Button appearance="secondary" size="md">Medium</Button>
					<Button appearance="secondary" size="lg">Large</Button>
				</Stack>
			</GenericBlock>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Secondary with Icon</Text>
			<GenericBlock bgColor="grey-400" appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="secondary" size="xs">X-Small</Button>
					<Button appearance="secondary" size="sm">Small</Button>
					<Button appearance="secondary" size="md">Medium</Button>
					<Button appearance="secondary" size="lg">Large</Button>
				</Stack>
			</GenericBlock>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Secondary inverted</Text>
			<GenericBlock bgColor="grey-400" appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="secondary" size="xs" invert>X-Small</Button>
					<Button appearance="secondary" size="sm" invert>Small</Button>
					<Button appearance="secondary" size="md" invert>Medium</Button>
					<Button appearance="secondary" size="lg" invert>Large</Button>
				</Stack>
			</GenericBlock>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Secondary inverted with Icon</Text>

			<GenericBlock bgColor="grey-400" appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="secondary" size="xs" invert>X-Small</Button>
					<Button appearance="secondary" size="sm" invert>Small</Button>
					<Button appearance="secondary" size="md" invert>Medium</Button>
					<Button appearance="secondary" size="lg" invert>Large</Button>
				</Stack>
			</GenericBlock>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Minimal</Text>
			<Stack direction="row" align="center">
				<Button appearance="minimal" size="xs">X-Small</Button>
				<Button appearance="minimal" size="sm">Small</Button>
				<Button appearance="minimal" size="md">Medium</Button>
				<Button appearance="minimal" size="lg">Large</Button>
			</Stack>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Minimal with Icon</Text>
			<Stack direction="row" align="center">
				<Button appearance="minimal" size="xs">X-Small</Button>
				<Button appearance="minimal" size="sm">Small</Button>
				<Button appearance="minimal" size="md">Medium</Button>
				<Button appearance="minimal" size="lg">Large</Button>
			</Stack>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Minimal inverted</Text>
			<GenericBlock bgColor="grey-400" appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="minimal" size="xs" invert>X-Small</Button>
					<Button appearance="minimal" size="sm" invert>Small</Button>
					<Button appearance="minimal" size="md" invert>Medium</Button>
					<Button appearance="minimal" size="lg" invert>Large</Button>
				</Stack>
			</GenericBlock>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Minimal inverted with Icon</Text>
			<GenericBlock bgColor="grey-400" appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="minimal" size="xs" invert>X-Small</Button>
					<Button appearance="minimal" size="sm" invert>Small</Button>
					<Button appearance="minimal" size="md" invert>Medium</Button>
					<Button appearance="minimal" size="lg" invert>Large</Button>
				</Stack>
			</GenericBlock>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Link</Text>
			<Stack direction="row" align="center">
				<Button appearance="link" size="xs" underline>X-Small</Button>
				<Button appearance="link" size="sm" underline>Small</Button>
				<Button appearance="link" size="md" underline>Medium</Button>
				<Button appearance="link" size="lg" underline>Large</Button>
			</Stack>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Link with Icon</Text>
			<Stack direction="row" align="center">
				<Button appearance="link" underline size="xs">X-Small</Button>
				<Button appearance="link" underline size="sm">Small</Button>
				<Button appearance="link" underline size="md">Medium</Button>
				<Button appearance="link" size="lg" underline>Large</Button>
			</Stack>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Link inverted</Text>
			<GenericBlock bgColor="grey-400" appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="link" size="xs" invert underline>X-Small</Button>
					<Button appearance="link" size="sm" invert underline>Small</Button>
					<Button appearance="link" size="md" invert underline>Medium</Button>
					<Button appearance="link" size="lg" invert underline>Large</Button>
				</Stack>
			</GenericBlock>

			<Divider appearance="dashed" gap="8" />

			<Text preset="display">Link inverted with Icon</Text>
			<GenericBlock bgColor="grey-400" appearance="card">
				<Stack direction="row" align="center">
					<Button appearance="link" size="xs" invert underline>X-Small</Button>
					<Button appearance="link" size="sm" invert underline>Small</Button>
					<Button appearance="link" size="md" invert underline>Medium</Button>
					<Button appearance="link" size="lg" invert underline>Large</Button>
				</Stack>
			</GenericBlock>
		</Stack>
	</svelte:component>

	<svelte:component this={Hst.Variant} title="Shape">
		<Stack>
			<Text preset="display">Circle</Text>
			<Stack direction="row">
				<Button shape="circle"></Button>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Square</Text>
			<Stack direction="row">
				<Button shape="square" bgColor="light-blue-400">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
						/>
					</svg>
				</Button>
			</Stack>
		</Stack>
	</svelte:component>

	<svelte:component this={Hst.Variant} title="Variant">
		<Stack>
			<Text preset="display">Default</Text>
			<Stack direction="row">
				<Button>This is a button</Button>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Pill</Text>
			<Stack direction="row">
				<Button variant="pill" invert>This is a button</Button>
			</Stack>
		</Stack>

		<Divider appearance="dashed" gap="8" />

		<Stack>
			<Text preset="display">Rounded</Text>
			<Stack direction="row">
				<Button variant="rounded" invert appearance="primary">This is a button</Button>
			</Stack>
		</Stack>
	</svelte:component>
</svelte:component>

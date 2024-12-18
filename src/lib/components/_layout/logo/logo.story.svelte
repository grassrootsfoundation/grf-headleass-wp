<script lang="ts">
  import Divider from '$components/divider/divider.svelte';
  import Stack from '$components/stack/stack.svelte';
  import Text from '$components/text/text.svelte';

  import Logo from './logo.svelte';

  export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Logo">
  <svelte:component this={Hst.Variant} title="Acronym">
    <Stack>
      <Text preset="display">Extra Small</Text>
      <Logo variant="acronym" size="xs" />
    </Stack>
    <Divider appearance="solid" />
    <Stack>
      <Text preset="display">Small</Text>
      <Logo variant="acronym" size="sm" />
    </Stack>
    <Divider appearance="solid" />
    <Stack>
      <Text preset="display">Medium</Text>
      <Logo variant="acronym" size="md" />
    </Stack>
    <Divider appearance="solid" />
    <Stack>
      <Text preset="display">Large</Text>
      <Logo variant="acronym" size="lg" />
    </Stack>
  </svelte:component>
  <svelte:component this={Hst.Variant} title="Icon">
    <Stack>
      <Text preset="display">Extra Small</Text>
      <Logo size="xs" />
    </Stack>
    <Divider appearance="solid" />
    <Stack>
      <Text preset="display">Small</Text>
      <Logo size="sm" />
    </Stack>
    <Divider appearance="solid" />
    <Stack>
      <Text preset="display">Medium</Text>
      <Logo size="md" />
    </Stack>
    <Divider appearance="solid" />
    <Stack>
      <Text preset="display">Large</Text>
      <Logo size="lg" />
    </Stack>
  </svelte:component>
  <svelte:component this={Hst.Variant} title="Text">
    <Stack>
      <Text preset="display">Extra Small</Text>
      <Logo variant="text" size="xs" />
    </Stack>
    <Divider appearance="solid" />
    <Stack>
      <Text preset="display">Small</Text>
      <Logo variant="text" size="sm" />
    </Stack>
    <Divider appearance="solid" />
    <Stack>
      <Text preset="display">Medium</Text>
      <Logo variant="text" size="md" />
    </Stack>
    <Divider appearance="solid" />
    <Stack>
      <Text preset="display">Large</Text>
      <Logo variant="text" size="lg" />
    </Stack>
  </svelte:component>
  <svelte:component this={Hst.Variant} title="Text Center">
    <Stack>
      <Text preset="display">Extra Small</Text>
      <Logo variant="text-center" size="xs" />
    </Stack>
    <Divider appearance="solid" />
    <Stack>
      <Text preset="display">Small</Text>
      <Logo variant="text-center" size="sm" />
    </Stack>
    <Divider appearance="solid" />
    <Stack>
      <Text preset="display">Medium</Text>
      <Logo variant="text-center" size="md" />
    </Stack>
    <Divider appearance="solid" />
    <Stack>
      <Text preset="display">Large</Text>
      <Logo variant="text-center" size="lg" />
    </Stack>
  </svelte:component>
</svelte:component>

<script lang="ts">
  import Divider from '$components/divider/divider.svelte';
  import Stack from '$components/stack/stack.svelte';
  import Text from '$components/text/text.svelte';

  import Badge from './badge.svelte';

  export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Badge">
  <svelte:component this={Hst.Variant} title="Sizes">
    <Stack>
      <Stack>
        <Text preset="display">Small</Text>
        <Stack direction="row">
          <Badge intent="info" size="4">0</Badge>
          <Badge intent="success" size="4">100</Badge>
          <Badge intent="warning" size="4">2000</Badge>
          <Badge intent="error" size="4">2000</Badge>
        </Stack>
      </Stack>
      <Divider appearance="dashed" gap="8" />
      <Stack>
        <Text preset="display">Medium</Text>
        <Stack direction="row">
          <Badge intent="info" size="5">0</Badge>
          <Badge intent="success" size="5">100</Badge>
          <Badge intent="warning" size="5">2000</Badge>
          <Badge intent="error" size="5">2000</Badge>
        </Stack>
      </Stack>
      <Divider appearance="dashed" gap="8" />
      <Stack>
        <Text preset="display">Large</Text>
        <Stack direction="row">
          <Badge intent="info" size="6">0</Badge>
          <Badge intent="success" size="6">100</Badge>
          <Badge intent="warning" size="6">2000</Badge>
          <Badge intent="error" size="6">2000</Badge>
        </Stack>
      </Stack>
    </Stack>
  </svelte:component>
</svelte:component>

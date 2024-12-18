<script lang="ts">
  import { tok } from '$lib/utils/style';

  import Logo from '$components/_layout/logo/logo.svelte';
  import Stack from '$components/stack/stack.svelte';
  import Text from '$components/text/text.svelte';
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

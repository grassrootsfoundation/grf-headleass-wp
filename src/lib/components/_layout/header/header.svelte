<script lang="ts">
  import { tok } from '$lib/utils/style';

  import Logo from '$components/_layout/logo/logo.svelte';
  import Button from '$components/button/button.svelte';
  import Divider from '$components/divider/divider.svelte';
  import PageSection from '$components/page/page-section.svelte';
  import Stack from '$components/stack/stack.svelte';
</script>

<header class="header">
  <PageSection>
    <Stack
      direction="row"
      justify="space-between"
      align="center"
      style="padding-top: {tok('size', 2)}; ">
      <a href="/">
        <Logo variant="acronym" size="xs" />
      </a>
      <Stack direction="row" justify="end" style={{ flex: 1 }}>
        <Button appearance="link" href="/about">Guides</Button>
        <Button appearance="link" href="/about">About Us</Button>
        <Button variant="pill" href="/give">Give</Button>
      </Stack>
    </Stack>
  </PageSection>
  <Divider size="sm" appearance="solid" />
  <Divider />
</header>

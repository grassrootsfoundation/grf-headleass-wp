<script lang="ts">
  import '@fontsource/almarai';
  import 'trusty-css/dist/index.css';

  import '$src/public/globals.css';

  import type { UserDocument } from '$lib/types/api-types';

  import Login from '$components/auth/login/login.svelte';
  import Logout from '$components/auth/logout/logout.svelte';
  import Register from '$components/auth/register/register.svelte';
  import ButtonUnstyled from '$components/button/button-unstyled.svelte';
  import Button from '$components/button/button.svelte';
  import GenericBlock from '$components/generic-block/generic-block.svelte';
  import Heading from '$components/heading/heading.svelte';
  import PageBody from '$components/page/page-body.svelte';
  import PageSection from '$components/page/page-section.svelte';
  import Page from '$components/page/page.svelte';
  import Stack from '$components/stack/stack.svelte';

  import { setUser, user } from '$src/stores/auth';

  export let data: { user: UserDocument | null };

  $: setUser(data.user);
</script>

<Page>
  <GenericBlock
    as="header"
    spacingBlock="3"
    spacingInline="8"
    bgColor="neutral-200">
    <PageSection as="header">
      <Stack direction="row" align="center" justify="space-between">
        <ButtonUnstyled>
          <Heading level="1" display="3" weight="black">GRF</Heading>
        </ButtonUnstyled>

        {#if $user}
          <Stack direction="row">
            <Button href="/">Home</Button>
            <Button href="/dashboard">Dashboard</Button>
            <Logout />
          </Stack>
        {:else}
          <Stack direction="row">
            <Button href="/">Home</Button>
            <Login />
            <Register />
          </Stack>
        {/if}
      </Stack>
    </PageSection>
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

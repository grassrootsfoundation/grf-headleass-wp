<script lang="ts">
  import '@fontsource-variable/sora';
  import 'trusty-css/dist/index.css';

  import '$src/public/globals.css';

  import Divider from '$src/lib/components/divider/divider.svelte';
  import { setUser, user } from '$src/stores/auth';

  import Logo from '$components/_layout/logo/logo.svelte';
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

  import type { UserDocument } from '$types/api-types';

  export let data: { user: UserDocument | null };

  $: {
    if (data && data.user) {
      setUser(data.user);
    } else {
      console.warn('data.user is undefined or null');
    }
  }
</script>

<Page>
  <GenericBlock as="header">
    <PageSection
      spacingBlockStart={{ default: '2', lg: '3' }}
      spacingBlockEnd={{ default: '2', lg: '3' }}>
      <Stack direction="row" align="center" justify="space-between">
        <ButtonUnstyled href="/">
          <Heading
            level="1"
            display="3"
            weight="black"
            data-label="Grass Roots Foundation">
            <Logo variant="acronym" size="xs" />
          </Heading>
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
  <Divider spacing="none" appearance="solid" />
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

<main>
  <h1>SvelteKit Layout</h1>
</main>

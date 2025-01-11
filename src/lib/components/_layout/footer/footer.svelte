<script lang="ts">
  import PageSection from '$src/lib/components/page/_page-section.svelte';

  import { tok } from '$lib/utils/style';

  import Divider from '$components/divider/divider.svelte';
  import GenericBlock from '$components/generic-block/generic-block.svelte';
  import Grid from '$components/grid/grid.svelte';
  import Stack from '$components/stack/stack.svelte';
  import Text from '$components/text/text.svelte';

  import FooterMenu from './_footer-menu.svelte';
  import FooterSlogan from './_footer-slogan.svelte';
</script>

<Divider appearance="solid" spacing="lg" />
<footer class="footer">
  <PageSection>
    <Grid columns={{ default: 1, md: 2, lg: 3 }}>
      <FooterSlogan />
      <FooterMenu />
    </Grid>
  </PageSection>
  <Divider spacing="sm" />
  <GenericBlock --bg-color={tok('color', 'neutral-100')}>
    <PageSection>
      <Stack direction="row" justify="end" align="center">
        <Text preset="caption" size="sm" color={tok('color', 'neutral-100')}>
          Copyright 2023. All rights Reserved.
        </Text>
      </Stack>
    </PageSection>
  </GenericBlock>
  <Divider spacing="sm" />
</footer>

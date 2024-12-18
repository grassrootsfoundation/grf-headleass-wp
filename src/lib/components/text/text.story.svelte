<script lang="ts">
  import Divider from '$components/divider/divider.svelte';
  import Stack from '$components/stack/stack.svelte';

  import Text from './text.svelte';

  export let Hst;
</script>

<svelte:component this={Hst.Story} title="Component/Text">
  <svelte:component this={Hst.Variant} title="Leading (line height)">
    <Stack>
      <Text size="xl" leading="none">
        <Text as="span" color="success">Leading none</Text>
        Hi boys. I’m Tina. Hey Jimmy Jr. Did you see those two squirrels fighting
        in the courtyard? There is one place I like to go. The boys’ locker room.
      </Text>
      <Divider appearance="dashed" gap="8" />
      <Text size="xl" leading="tight">
        <Text as="span" color="success">Leading tight</Text>
        Hi boys. I’m Tina. Hey Jimmy Jr. Did you see those two squirrels fighting
        in the courtyard? There is one place I like to go. The boys’ locker room.
      </Text>
      <Divider appearance="dashed" gap="8" />
      <Text size="xl" leading="snug">
        <Text as="span" color="success">Leading snug</Text>
        I’m no hero. I just put my bra on one boob at a time. Ok then, see you on
        our date! If we see any mermaids, I’m gonna ask them where their merginas
        are.
      </Text>
      <Divider appearance="dashed" gap="8" />
      <Text size="xl" leading="normal">
        <Text as="span" color="success">Leading normal</Text>
        You can only see up to their ankles. I can’t tell where your back ends and
        your butt begins. If I drunk text you and you’re asleep, don’t text me in
        the morning…that ship has sailed.
      </Text>
      <Divider appearance="dashed" gap="8" />
      <Text size="xl" leading="relaxed">
        <Text as="span" color="success">Leading relaxed</Text>
        Collaboratively administrate empowered markets via plug-and-play networks.
        Dynamically procrastinate B2C users after installed base benefits.
      </Text>
      <Divider appearance="dashed" gap="8" />
      <Text size="xl" leading="loose">
        <Text as="span" color="success">Leading loose</Text>
        Dramatically visualize customer directed convergence without revolutionary
        ROI. Efficiently unleash cross-media information without cross-media value.
      </Text>
    </Stack>
  </svelte:component>

  <svelte:component this={Hst.Variant} title="Tracking (letter spacing)">
    <Stack>
      <Text size="xl" tracking="tighter" color="success">Tracking tighter</Text>
      <Divider appearance="dashed" gap="8" />
      <Text size="xl" tracking="tight" color="success">Tracking tight</Text>
      <Divider appearance="dashed" gap="8" />
      <Text size="xl" tracking="normal" color="success">Tracking normal</Text>
      <Divider appearance="dashed" gap="8" />
      <Text size="xl" tracking="wide" color="success">Tracking wide</Text>
      <Divider appearance="dashed" gap="8" />
      <Text size="xl" tracking="wider" color="success">Tracking wider</Text>
      <Divider appearance="dashed" gap="8" />
      <Text size="xl" tracking="widest" color="success">Tracking widest</Text>
    </Stack>
  </svelte:component>

  <svelte:component this={Hst.Variant} title="Font Weight">
    <Stack>
      <Text size="xl" weight="black">
        Font weight <Text as="span" color="success">black</Text>
      </Text>
      <Divider appearance="dashed" gap="8" />
      <Text size="xl" weight="bold">
        Font weight <Text as="span" color="success">bold</Text>
      </Text>
      <Divider appearance="dashed" gap="8" />
      <Text size="xl" weight="semibold">
        Font weight <Text as="span" color="success">semibold</Text>
      </Text>
      <Divider appearance="dashed" gap="8" />
      <Text size="xl" weight="medium">
        Font weight <Text as="span" color="success">medium</Text>
      </Text>
      <Divider appearance="dashed" gap="8" />
      <Text size="xl" weight="normal">
        Font weight <Text as="span" color="success">normal</Text>
      </Text>
    </Stack>
  </svelte:component>
  <svelte:component this={Hst.Variant} title="Default ⇢ Size">
    <Text size="2xl">
      Caption test in size <Text as="span" color="success">2xl</Text>
    </Text>
    <Text size="xl">
      Caption test in size <Text as="span" color="success">xl</Text>
    </Text>
    <Text size="lg">
      Caption test in size <Text as="span" color="success">lg</Text>
    </Text>
    <Text size="md">
      Caption test in size <Text as="span" color="success">md</Text>
    </Text>
    <Text size="sm">
      Caption test in size <Text as="span" color="success">sm</Text>
    </Text>
    <Text size="xs">
      Caption test in size <Text as="span" color="success">xs</Text>
    </Text>
  </svelte:component>
  <svelte:component this={Hst.Variant} title="Caption ⇢ Size">
    <Text size="2xl" preset="caption">
      Caption test in size <Text as="span" color="success">2xl</Text>
    </Text>
    <Text size="xl" preset="caption">
      Caption test in size <Text as="span" color="success">xl</Text>
    </Text>
    <Text size="lg" preset="caption">
      Caption test in size <Text as="span" color="success">lg</Text>
    </Text>
    <Text size="md" preset="caption">
      Caption test in size <Text as="span" color="success">md</Text>
    </Text>
    <Text size="sm" preset="caption">
      Caption test in size <Text as="span" color="success">sm</Text>
    </Text>
    <Text size="xs" preset="caption">
      Caption test in size <Text as="span" color="success">xs</Text>
    </Text>
  </svelte:component>

  <svelte:component this={Hst.Variant} title="Display ⇢ Size">
    <Text size="2xl" preset="display" leading="none">
      Display test in size <Text as="span" color="success">2xl</Text>
    </Text>
    <Text size="xl" preset="display">
      Display test in size <Text as="span" color="success">xl</Text>
    </Text>
    <Text size="lg" preset="display">
      Display test in size <Text as="span" color="success">lg</Text>
    </Text>
    <Text size="md" preset="display">
      Display test in size <Text as="span" color="success">md</Text>
    </Text>
    <Text size="sm" preset="display">
      Display test in size <Text as="span" color="success">sm</Text>
    </Text>
    <Text size="xs" preset="display">
      Display test in size <Text as="span" color="success">xs</Text>
    </Text>
  </svelte:component>

  <svelte:component this={Hst.Variant} title="Underline">
    <Text size="2xl" preset="caption" underline>
      Caption test in size <Text as="span" color="success">2xl</Text>
    </Text>
  </svelte:component>
</svelte:component>

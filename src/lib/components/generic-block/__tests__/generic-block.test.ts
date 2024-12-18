import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import { tok } from '$utils/style';

import GenericBlock from '$components/generic-block/generic-block.svelte';

describe('GenericBlock', () => {
  it('accepts radius and bgcolor props', () => {
    render(GenericBlock, {
      props: {
        radius: tok('radius', 'full'),
        bgcolor: tok('color', 'success'),
      },
    });
  });
  it('accepts styles', () => {
    render(GenericBlock, {
      props: { style: `color; ${tok('radius', 'full')}` },
    });
  });
});

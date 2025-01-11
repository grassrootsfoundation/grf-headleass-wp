import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Hero from '$components/hero/hero.svelte';

describe('Hero', () => {
  it('works', () => {
    render(Hero, { props: {} });
  });
});

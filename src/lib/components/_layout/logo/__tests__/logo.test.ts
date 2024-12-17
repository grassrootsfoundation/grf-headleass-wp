import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';

import Logo from '../logo.svelte';

describe('Logo', () => {
	it('works', () => {
		render(Logo, {});
	});
});

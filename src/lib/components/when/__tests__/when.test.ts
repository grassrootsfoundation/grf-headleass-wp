import { render } from '@testing-library/svelte';

import When from '$components/when/when.svelte';

describe('When', () => {
	it('works', () => {
		render(When, { props: { condition: true } });
	});
});

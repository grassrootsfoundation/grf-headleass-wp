<script lang="ts">
	import { fade } from 'svelte/transition';
	export let errors: Errors = [];

	import type { Errors } from '$src/lib/types/errors';

	$: normalizedErrors = normalizeErrors(errors);

	function normalizeErrors(errors: Errors): string[] {
		if (typeof errors === 'string') {
			return [errors];
		}
		if (Array.isArray(errors)) {
			return errors.map((err) => (typeof err === 'string' ? err : JSON.stringify(err)));
		}
		if (errors && typeof errors === 'object') {
			if (errors.message) {
				if (typeof errors.message === 'string') {
					return [errors.message];
				}
				if (Array.isArray(errors.message)) {
					return errors.message;
				}
			}
			return Object.values(errors).map((err) =>
				typeof err === 'string' ? err : JSON.stringify(err)
			);
		}
		return ['An unknown error occurred'];
	}
</script>

{#if normalizedErrors.length > 0}
	<div class="error-container" transition:fade>
		<ul>
			{#each normalizedErrors as error}
				<li>{error}</li>
			{/each}
		</ul>
	</div>
{/if}

<style>
	.error-container {
		color: red;
		background-color: #ffeeee;
		border: 1px solid red;
		padding: 1rem;
		margin: 1rem 0;
		border-radius: 4px;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	li {
		margin: 0.5rem 0;

		&:first-letter {
			text-transform: capitalize;
		}
	}
</style>

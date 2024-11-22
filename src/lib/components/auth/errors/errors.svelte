<script lang="ts">
	import { fade } from 'svelte/transition';
	export let errors: string[] = [];
</script>

{#if errors.length > 0}
	<div class="error-container" transition:fade>
		<ul>
			{#each errors as error}
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

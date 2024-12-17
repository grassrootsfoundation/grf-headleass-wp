<script lang="ts" context="module">
	export interface MediaQueryProps {
		query: string;
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	// Props
	export let query: MediaQueryProps['query'];

	// Variables
	let mql: MediaQueryList | null = null; // MatchMedia object
	let mqlListener: ((this: MediaQueryList, ev: MediaQueryListEvent) => void) | null = null; // Listener
	let wasMounted = false;
	let matches = false; // State indicating whether the query matches

	// Lifecycle
	onMount(() => {
		wasMounted = true;

		// Cleanup on component unmount
		return () => {
			removeActiveListener();
		};
	});

	// Reactive statement to handle query changes
	$: {
		if (wasMounted) {
			removeActiveListener();
			addNewListener(query);
		}
	}

	/**
	 * Add a new media query listener
	 * @param query - The media query string
	 */
	function addNewListener(query: string): void {
		mql = window.matchMedia(query); // Create a MediaQueryList object
		mqlListener = (e: MediaQueryListEvent) => {
			matches = e.matches; // Update matches when the query result changes
		};
		mql.addEventListener('change', mqlListener); // Attach the listener
		matches = mql.matches; // Set initial state
	}

	/**
	 * Remove the active media query listener
	 */
	function removeActiveListener(): void {
		if (mql && mqlListener) {
			mql.removeEventListener('change', mqlListener); // Detach the listener
		}
	}
</script>

<slot {matches} />

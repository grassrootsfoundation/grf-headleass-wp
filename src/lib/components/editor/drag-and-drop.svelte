<script lang="ts">
	import { onMount } from 'svelte';
	import { dndzone } from 'svelte-dnd-action';

	import type { DndEvent } from 'svelte-dnd-action';

	interface Block {
		id: number;
		content: string;
	}

	let items: Block[] = [
		{ id: 1, content: 'Block 1' },
		{ id: 2, content: 'Block 2' },
		{ id: 3, content: 'Block 3' }
	];

	function handleDrop(event: CustomEvent<DndEvent>) {
		// Handle the drop event
		console.log('Dropped item:', event);
	}

	let ulElement: HTMLUListElement;

	onMount(() => {
		// Add the event listener manually
		if (ulElement) {
			ulElement.addEventListener('dnd-drop', handleDrop as EventListener);
		}

		return () => {
			// Cleanup the event listener on unmount
			if (ulElement) {
				ulElement.removeEventListener('dnd-drop', handleDrop as EventListener);
			}
		};
	});
</script>

<ul bind:this={ulElement} use:dndzone={{ items, flipDurationMs: 300 }}>
	{#each items as item}
		<li>{item.content}</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
	}
	li {
		padding: 10px;
		margin: 5px;
		background-color: #ddd;
		cursor: grab;
	}
</style>

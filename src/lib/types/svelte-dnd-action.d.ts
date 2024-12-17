declare namespace svelte.JSX {
	interface HTMLAttributes {
		// Add support for `dnd-drop` and other events from `svelte-dnd-action`
		'on:dnd-drop'?: (event: CustomEvent) => void;
		'on:dnd-drag-start'?: (event: CustomEvent) => void;
		'on:dnd-drag-move'?: (event: CustomEvent) => void;
		'on:dnd-drag-end'?: (event: CustomEvent) => void;
	}
}

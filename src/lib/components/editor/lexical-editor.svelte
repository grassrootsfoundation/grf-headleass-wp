<script lang="ts">
	import { onMount } from 'svelte';
	import { createEditor } from 'lexical';
	import {
		$getRoot as getRoot,
		$createParagraphNode as createParagraphNode,
		$createTextNode as createTextNode
	} from 'lexical';

	import type { LexicalEditor } from 'lexical';

	let editor: LexicalEditor;

	onMount(() => {
		// Create the Lexical editor
		editor = createEditor({
			namespace: 'MyEditorNamespace',
			theme: {},
			nodes: [],
			onError: (error) => {
				console.error('Lexical Editor Error:', error);
			}
		});

		// Example: Set initial content
		editor.update(() => {
			const root = getRoot();
			const paragraphNode = createParagraphNode();
			paragraphNode.append(createTextNode('Welcome to Lexical Editor!'));
			root.append(paragraphNode);
		});

		return () => {
			// Clear the editor’s DOM container (if necessary)
			const container = document.querySelector('.editor');
			if (container) {
				container.innerHTML = '';
			}

			// Clear references to avoid memory leaks
			editor = null as unknown as LexicalEditor;
		};
	});
</script>

<div class="editor" contenteditable></div>

<style>
	.editor {
		border: 1px solid #ddd;
		padding: 10px;
		min-height: 200px;
	}
</style>

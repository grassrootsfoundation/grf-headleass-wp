<script lang="ts">
	import { onMount } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';

	let editor: Editor;

	onMount(() => {
		// Initialize the TipTap editor
		editor = new Editor({
			element: document.querySelector('.editor') as Element | undefined,
			extensions: [StarterKit],
			content: '<p>Hello World!</p>'
		});

		return () => {
			// Clean up the editor instance when the component is destroyed
			editor.destroy();
		};
	});

	// Function to save the content
	async function saveContent() {
		const contentHTML = editor.getHTML(); // Extract content as HTML
		console.log('Content to save:', contentHTML);

		try {
			const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/content`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ content: contentHTML })
			});

			console.log({ response });

			if (response.ok) {
				alert('Content saved successfully!');
			} else {
				alert('Failed to save content');
			}
		} catch (error) {
			console.error('Error saving content:', error);
			alert('An error occurred while saving content');
		}
	}
</script>

<div class="editor"></div>
<button on:click={saveContent}>Save Content</button>

<style>
	.editor {
		border: 1px solid #ddd;
		padding: 10px;
		min-height: 150px;
		outline: none;
	}
</style>

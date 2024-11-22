<script lang="ts">
	import { onMount } from 'svelte';
	import io from 'socket.io-client';

	interface Content {
		id: string;
		title: string;
		body: string;
	}

	let content: Content = { id: '', title: '', body: '' };
	const socket = io(`${import.meta.env.VITE_API_BASE_URL}`); // Adjust the URL to your backend

	// Fetch initial content
	async function fetchContent(id: string): Promise<void> {
		const response = await fetch(`/api/v1/content/${id}`);
		content = await response.json();
	}

	// Listen for content updates
	onMount(() => {
		socket.on('contentUpdate', (updatedContent: Content) => {
			content = updatedContent;
		});

		return () => {
			socket.disconnect();
		};
	});

	// Function to handle content changes
	async function updateContent(newContent: Partial<Content>): Promise<void> {
		await fetch(`/api/v1/content/${content.id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newContent)
		});

		// Notify the backend about the content update
		socket.emit('contentUpdated', newContent);
	}
</script>

<div class="editor">
	<!-- Render your content components here -->
	<h1
		contenteditable
		on:input={(e) => {
			const target = e.target as HTMLElement;
			updateContent({ title: target.innerText });
		}}
	>
		{content.title}
	</h1>
	<p
		contenteditable
		on:input={(e) => {
			const target = e.target as HTMLElement;
			updateContent({ body: target.innerText });
		}}
	>
		{content.body}
	</p>
</div>

<style>
	.editor {
		/* Add your styles for the editor */
	}
</style>

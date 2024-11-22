<script lang="ts">
	import { user } from '../../../stores/auth';

	let file: File | null = null;

	async function uploadFile() {
		if (!file) return;

		const { token } = $user;
		const formData = new FormData();
		formData.append('file', file);

		const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/media/upload`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`
			},
			body: formData
		});

		if (response.ok) {
			alert('File uploaded successfully');
		} else {
			alert('Failed to upload file');
		}
	}
</script>

<h1>Upload Media</h1>
<input type="file" on:change={(e: any) => (file = e.target.files[0])} />
<button on:click={uploadFile}>Upload</button>

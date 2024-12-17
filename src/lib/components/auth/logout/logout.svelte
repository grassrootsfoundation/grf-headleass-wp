<script lang="ts">
	import Button from '$components/button/button.svelte';

	import { goto } from '$app/navigation';
	import { logout as apiLogout } from '$lib/api/auth/logout';
	import { clearUser } from '$src/stores/auth';

	async function logout() {
		try {
			const success = await apiLogout();

			if (success) {
				clearUser();
				window.location.reload();
				goto('/');
			} else {
				alert('Logout failed. Please try again.');
			}
		} catch (error) {
			console.error('Error logging out:', error);
			alert('An error occurred while logging out.');
		}
	}
</script>

<!-- Logout Button -->
<Button on:click={logout}>Logout</Button>

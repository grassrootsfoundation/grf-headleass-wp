<script lang="ts">
	import { goto } from '$app/navigation';
	import { clearUser } from '$src/stores/auth';
	import { logout as apiLogout } from '$lib/api/auth/logout';

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
<button on:click={logout}>Logout</button>

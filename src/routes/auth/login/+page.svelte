<script lang="ts">
	import { goto } from '$app/navigation';
	import { setUser } from '$src/stores/auth';

	import { login as apiLogin } from '$lib/api/auth/login';

	import Error from '$components/auth/errors/errors.svelte';
	import RequestReset from '$components/auth/request-reset/request-reset.svelte';

	let email = '';
	let password = '';
	let errorMessages: string[] = [];

	export async function login() {
		try {
			const response = await apiLogin(email, password);

			if (response.ok) {
				const { user } = await response.json();

				setUser(user);
				window.location.reload();

				goto('/');
			} else {
				const errorData = await response.json();
				errorMessages = errorData.message.message;
			}
		} catch (error) {
			alert('An error occurred while logging in, please try again.');
		}
	}
</script>

<form on:submit|preventDefault={login}>
	<label for="email">Email:</label>
	<input type="email" name="email" id="email" bind:value={email} />

	<label for="password">Password:</label>
	<input type="password" name="password" id="password" bind:value={password} />

	<button type="submit" name="submit">Login</button>

	<Error errors={errorMessages} />
</form>

<RequestReset />

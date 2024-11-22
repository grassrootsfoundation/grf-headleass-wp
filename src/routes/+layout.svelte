<script lang="ts">
	import { setUser, user } from '$src/stores/auth';

	import Logout from '$src/lib/components/auth/logout/logout.svelte';
	import Login from '$src/lib/components/auth/login/login.svelte';
	import Register from '$src/lib/components/auth/register/register.svelte';

	export let data: { user: { id: string; role: string } | null };

	$: setUser(data.user);
</script>

<header>
	{#if $user}
		<a href="/">Home</a>
		<a href="/dashboard">Dashboard</a>
		<Logout />
		<p>Welcome, {$user.role}!</p>
	{:else}
		<a href="/">Home</a>
		<Login />
		<Register />
		<p>You are not logged in.</p>
	{/if}
</header>

<slot />

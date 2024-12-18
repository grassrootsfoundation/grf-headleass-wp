<script lang="ts">
  import { goto } from '$app/navigation';

  import Error from '$components/auth/errors/errors.svelte';

  import { register as apiRegister } from '$src/lib/api/auth/register';

  // Bindable fields
  let name = '';
  let email = '';
  let password = '';
  let confirmPassword = '';
  let errorMessages: string[] = [];

  export async function register() {
    try {
      const response = await apiRegister(
        name,
        email,
        password,
        confirmPassword
      );

      if (response.ok) {
        alert('Registration successful!');
        setTimeout(() => goto('/auth/login'), 2000);
      } else {
        const errorData = await response.json();
        errorMessages = errorData.message.message;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(
          'An error occurred while registering the user, please try again.'
        );
      }
    }
  }
</script>

<h1>Register</h1>
<form on:submit|preventDefault={register}>
  <label for="name">Name:</label>
  <input id="name" name="name" type="text" bind:value={name} />

  <label for="email">Email:</label>
  <input id="email" name="email" type="email" bind:value={email} />

  <label for="password">Password:</label>
  <input id="password" name="password" type="password" bind:value={password} />

  <label for="confirmPassword">Confirm Password:</label>
  <input
    id="confirmPassword"
    type="password"
    name="confirmPassword"
    bind:value={confirmPassword} />

  <Error errors={errorMessages} />

  <button type="submit">Register</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
    gap: 1rem;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
  }

  button {
    padding: 0.75rem;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>

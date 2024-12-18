<script lang="ts">
  import { goto } from '$app/navigation';

  let name = '';
  let email = '';
  let password = '';
  let role = 'viewer';

  async function createUser() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password, role }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert('User created successfully!');
        goto('/auth/login'); // Redirect to user list page
      } else {
        alert(data.error || 'Failed to create user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the user');
    }
  }
</script>

<h1>Create User</h1>
<form on:submit|preventDefault={createUser}>
  <label for="name">Name:</label>
  <input id="name" type="text" bind:value={name} required />

  <label for="email">Email:</label>
  <input id="email" type="email" bind:value={email} required />

  <label for="password">Password:</label>
  <input id="password" type="password" bind:value={password} required />

  <label for="role">Role:</label>
  <select id="role" bind:value={role}>
    <option id="admin" value="admin">Admin</option>
    <option id="editor" value="editor">Editor</option>
    <option id="viewer" value="viewer">Viewer</option>
  </select>

  <button type="submit">Create User</button>
</form>

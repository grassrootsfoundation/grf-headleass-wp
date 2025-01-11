import { writable } from 'svelte/store';

export const errors = writable({
  name: null,
  email: null,
  password: null,
  confirmPassword: null,
});

export function validateFields(
  field: string,
  value: string,
  password?: string
) {
  errors.update((currentErrors: any) => {
    switch (field) {
      case 'name':
        currentErrors.name = value.trim() ? null : 'Name is required.';
        break;
      case 'email':
        currentErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? null
          : 'Invalid email address.';
        break;
      case 'password':
        currentErrors.password =
          value.length >= 8 ? null : 'Password must be at least 8 characters.';
        break;
      case 'confirmPassword':
        currentErrors.confirmPassword =
          value === password ? null : 'Passwords do not match.';
        break;
    }
    return currentErrors;
  });
}

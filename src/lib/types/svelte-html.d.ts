/* eslint-disable no-unused-vars */
/// <reference types="svelte" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    // Extend HTML attributes here if needed
    'on:custom-event'?: (event: CustomEvent) => void;
  }
}

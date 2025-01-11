import { writable, type Writable } from 'svelte/store';

import type { Content, Block } from '$src/lib/types/content';

// Define the initial state of the store with proper typing
interface ContentStoreState {
  isLoading: boolean;
  error: string | null;
  data: Content | null; // The content follows the EditorData interface
}

const initialState: ContentStoreState = {
  isLoading: false,
  error: null,
  data: null,
};

// Create the store with proper typing
export const contentStore: Writable<ContentStoreState> = writable(initialState);

// Fetch content function
export async function fetchContent(
  contentId: string,
  apiBaseUrl: string
): Promise<void> {
  // Set loading state
  contentStore.update((state) => ({ ...state, isLoading: true, error: null }));

  try {
    // Fetch the content from the backend
    const response = await fetch(`${apiBaseUrl}/content/${contentId}`, {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch content: ${response.statusText}`);
    }

    const fetchedData: Content = await response.json(); // Ensure the response matches `EditorData`

    // Update the store with the fetched data
    contentStore.update((state) => ({
      ...state,
      data: fetchedData,
      isLoading: false,
      error: null,
    }));
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching content:', error);
    }

    // Update the store with the error
    contentStore.update((state) => ({
      ...state,
      isLoading: false,
      error:
        error instanceof Error
          ? error.message
          : 'An error occurred while fetching content',
    }));
  }
}

// Save content function
export async function saveContent(
  contentId: string,
  updatedData: { blocks: Block[] }, // Ensure the updated data matches `EditorData`
  apiBaseUrl: string
): Promise<void> {
  try {
    const response = await fetch(`${apiBaseUrl}/content/${contentId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Failed to save content: ${response.statusText}`);
    }

    const savedData: Content = await response.json(); // Ensure the response matches `EditorData`

    // Update the store with the saved data
    contentStore.update((state) => ({
      ...state,
      data: savedData,
      error: null,
    }));
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error saving content:', error);
    }

    // Update the store with the error
    contentStore.update((state) => ({
      ...state,
      error:
        error instanceof Error
          ? error.message
          : 'An unknown error occurred while saving content',
    }));
  }
}

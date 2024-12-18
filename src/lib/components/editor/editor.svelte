<script lang="ts">
  import { onMount } from 'svelte';

  import { saveContent } from '$src/stores/content';

  import RawHtml from '$components/raw-html/raw-html.svelte';

  import type {
    default as EditorJSConstructor,
    OutputData,
  } from '@editorjs/editorjs';

  import type { Block, Content } from '$types/api-types';

  export let contentId: string;
  export let isAuthorized: boolean;
  export let initialData: Content;

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  let editor: EditorJSConstructor | null = null; // Explicitly use the EditorJS type
  let isEditorInitialized = false;

  // Initialize the Editor.js instance
  async function initializeEditor(data: OutputData | undefined) {
    if (isEditorInitialized) return;
    isEditorInitialized = true;

    if (typeof window !== 'undefined' && isAuthorized) {
      const { default: EditorJS } = await import('@editorjs/editorjs');
      const Header = (await import('@editorjs/header')).default;
      const List = (await import('@editorjs/list')).default;
      const Embed = (await import('@editorjs/embed')).default;
      const Image = (await import('@editorjs/image')).default;
      const DragDrop = (await import('editorjs-drag-drop')).default;

      editor = new EditorJS({
        holder: 'editor',
        tools: {
          header: Header,
          list: List,
          embed: Embed,
          image: {
            class: Image,
            config: {
              endpoints: {
                byFile: `${API_BASE_URL}/content/upload`,
                byUrl: `${API_BASE_URL}/content/fetchUrl`,
              },
            },
          },
        },
        data,
        onChange: () => {
          console.log('Editor content changed');
        },
      });

      // Enable drag-and-drop for reordering blocks
      new DragDrop(editor);
    }
  }

  // Save content to the backend
  async function saveEditorContent() {
    if (!editor) return;

    try {
      const savedData = await editor.save();

      const transformedData: { blocks: Block[] } = {
        blocks: savedData.blocks.map((block, index: number) => ({
          id: block.id || `block-${index}`,
          type: block.type,
          data: block.data,
          order: index + 1,
        })),
      };

      await saveContent(contentId, transformedData, API_BASE_URL);
      alert('Content saved successfully!');
    } catch (error) {
      console.error('Failed to save content:', error);
    }
  }

  onMount(() => {
    // Initialize the editor only if authorized
    if (isAuthorized) {
      initializeEditor(initialData as OutputData);
    }

    // Cleanup on component unmount
    return () => {
      editor?.destroy();
      editor = null;
      isEditorInitialized = false; // Reset the initialization flag
    };
  });
</script>

{#if isAuthorized}
  <div id="editor"></div>
  <button on:click={saveEditorContent}>Save Content</button>
{:else}
  <!-- Render read-only content for unauthorized users -->
  <div>
    {#if initialData?.blocks?.length}
      {#each initialData.blocks ?? [] as block}
        {#if block?.data?.text}
          {#if block.type === 'header'}
            <h1>
              <RawHtml html={block.data.text} />
            </h1>
          {/if}
        {:else if block.type === 'paragraph' && block.data?.text}
          <p>
            <RawHtml html={block.data.text} />
          </p>
        {:else if block.type === 'list'}
          <ul>
            {#each block?.data?.items ?? [] as item}
              <li>
                <RawHtml html={item} />
              </li>
            {/each}
          </ul>
        {:else}
          <p>Unsupported block type: {block.type}</p>
        {/if}
      {/each}
    {/if}
  </div>
{/if}

<style>
  #editor {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    background-color: #fff;
    min-height: 300px;
  }
  button {
    margin-top: 16px;
  }
</style>

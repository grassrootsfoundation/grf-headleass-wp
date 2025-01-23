import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import azure from 'svelte-adapter-azure-swa';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess({
    postcss: true,
    typescript: false,
  }),
  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: azure(),
    alias: {
      '$src/*': './src/*',
      '$lib/*': './src/lib/*',
      '$utils/*': './src/lib/utils/*',
      '$components/*': './src/lib/components/*',
      '$types/*': './src/lib/types/*',
    },
  },
};

export default config;

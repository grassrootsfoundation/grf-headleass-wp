import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const backendUrl = process.env.VITE_API_BASE_URL + '/shared-types/types.ts';
console.log(`Fetching types from: ${backendUrl}`);

async function fetchTypes() {
  try {
    const response = await fetch(backendUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch types: ${response.statusText}`);
    }

    const typesContent = await response.text();
    const outputDir = path.resolve(__dirname, '../types');
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(
      path.join(outputDir, 'api-types.d.ts'),
      typesContent,
      'utf-8'
    );
    console.log(`Types pulled to ${outputDir}/api-types.d.types.ts`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error(`Unexpected error: ${error}`);
    }
  }
}

fetchTypes();

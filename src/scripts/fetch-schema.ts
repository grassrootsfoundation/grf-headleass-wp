import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const backendSchemaUrl = `${process.env.VITE_API_BASE_URL}/graphql-schema`;
const outputDir = path.resolve(__dirname, '../graphql');
const outputFile = path.join(outputDir, 'schema.graphql');

async function fetchGraphQLSchema() {
	try {
		const response = await fetch(backendSchemaUrl);

		if (!response.ok) {
			throw new Error(`Failed to fetch schema: ${response.statusText}`);
		}

		const schemaSDL = await response.text();

		// Ensure output directory exists
		fs.mkdirSync(outputDir, { recursive: true });

		// Write schema to file
		fs.writeFileSync(outputFile, schemaSDL, 'utf-8');
		console.log(`GraphQL schema pulled to ${outputFile}`);
	} catch (error) {
		if (error instanceof Error) {
			console.error(`Error fetching schema: ${error.message}`);
		} else {
			console.error(`Unexpected error: ${error}`);
		}
	}
}

fetchGraphQLSchema();

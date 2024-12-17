import fs from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

// Polyfill for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DIST_DIR = resolve(__dirname, '../../../dist');
const aliasMap = {
	'$components/': './components/',
	'$utils/': './utils/',
	'$types/': './types/',
	'$src/': './',
};

function replaceAliases(filePath: fs.PathOrFileDescriptor) {
	let content = fs.readFileSync(filePath, 'utf-8');
	for (const [alias, replacement] of Object.entries(aliasMap)) {
		content = content.replace(new RegExp(alias, 'g'), replacement);
	}
	fs.writeFileSync(filePath, content);
}

function processFiles(dir: string) {
	const files = fs.readdirSync(dir);
	for (const file of files) {
		const fullPath = resolve(dir, file);
		if (fs.statSync(fullPath).isDirectory()) {
			processFiles(fullPath);
		} else if (file.endsWith('.js') || file.endsWith('.mjs')) {
			replaceAliases(fullPath);
		}
	}
}

processFiles(DIST_DIR);

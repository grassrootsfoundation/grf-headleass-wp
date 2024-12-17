import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import'; // Import the plugin
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		plugins: {
			import: importPlugin, // Add the plugin here
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
			},
		},
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/'],
	},
	{
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
			],
			'import/order': [
				'warn',
				{
					pathGroups: [
						{ pattern: '$types/**', group: 'type', position: 'after' },
						{ pattern: '$utils/**', group: 'internal', position: 'before' },
						{ pattern: '$components/**', group: 'internal', position: 'before' },
						{ pattern: './**', group: 'sibling', position: 'before' },
						{
							pattern: '*.css',
							group: 'type',
							patternOptions: { matchBase: true },
							position: 'before',
						},
					],
					pathGroupsExcludedImportTypes: ['builtin', 'external', 'type'],
					groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],
		},
	}
);

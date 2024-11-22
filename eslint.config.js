import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

export default ts.config(
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],

		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	},
	{
		rules: {
			'import/order': [
				'warn',
				{
					pathGroups: [
						{
							pattern: '*.css',
							group: 'type',
							patternOptions: { matchBase: true },
							position: 'before'
						}
					],
					groups: ['builtin', 'external', 'internal', ['parent', 'index', 'sibling'], 'type'],
					'newlines-between': 'always',
					warnOnUnassignedImports: true
				}
			]
		}
	}
);

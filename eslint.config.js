import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import svelteParser from 'svelte-eslint-parser';
import tseslint from 'typescript-eslint';

export default [
  // Base ESLint recommended rules
  eslint.configs.recommended,

  // TypeScript configuration
  {
    files: [
      '**/*.ts',
      '**/*.svelte',
      '**/*.test.ts',
      '**/*.test.js',
      '**/*.spec.ts',
      '**/*.spec.js',
    ],
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
        ...globals.node,
        describe: true,
        it: true,
        expect: true,
        beforeEach: true,
        afterEach: true,
        beforeAll: true,
        afterAll: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      'no-undef': 'off',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },

  // Svelte configuration
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser, // Correct parser for Svelte
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.svelte'],
      },
    },
    plugins: {
      svelte,
    },
    rules: {
      ...svelte.configs.recommended.rules, // Recommended Svelte rules
    },
  },

  // Prettier integration to disable conflicting formatting rules
  {
    plugins: {
      prettier: prettier,
    },
    rules: {
      'prettier/prettier': 'warn',
    },
  },

  // Prettier formatting configuration
  prettierConfig,

  // Import plugin configuration
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'type',
          ],
          pathGroups: [
            { pattern: '$src/**', group: 'internal', position: 'before' },
            { pattern: '$types/**', group: 'type', position: 'after' },
            { pattern: '$app/**', group: 'builtin', position: 'before' },
            { pattern: '$utils/**', group: 'internal', position: 'before' },
            { pattern: '$lib/**', group: 'internal', position: 'before' },
            {
              pattern: '$components/**',
              group: 'internal',
              position: 'before',
            },
            { pattern: '*.css', group: 'type', position: 'before' },
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },

  // Ignore specific directories and files
  {
    ignores: [
      'build/',
      '.svelte-kit/',
      'dist/',
      'node_modules/',
      'src/lib/types/api-types.d.ts',
    ],
  },
];

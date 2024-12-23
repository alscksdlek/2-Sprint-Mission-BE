import { dirname } from 'path';
import { fileURLToPath } from 'url';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  {
    files: ['**/*.{js,ts}'],
    ignores: ['dist/**/*', 'node_modules/**/*', 'eslint.config.js'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
        ...globals.browser,
        jest: true,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'prettier/prettier': ['warn'],
      camelcase: ['warn', { properties: 'never' }],
      'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0 }],
      'import/extensions': [
        'error',
        'always',
        {
          js: 'always',
          ts: 'always',
        },
      ],
    },
  },
];

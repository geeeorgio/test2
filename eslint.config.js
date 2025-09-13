import plugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import js from '@eslint/js';

export default [
  // Base ESLint & TypeScript configs
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierPlugin,

  {
    plugins: {
      'react-hooks': reactHooks,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      import: plugin,
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        JSX: 'readonly',
      },
    },
    rules: {
      // Prettier
      'prettier/prettier': 'error',

      // Imports sort
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Node.js built-in modules & external libraries
            ['^node:?', '^\\w'],
            // External packages from node_modules
            ['^@?\\w'],
            // Internal project imports (e.g., '@', 'src')
            ['^(@|src)(/.*|$)'],
            // Parent imports ('../')
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Sibling imports ('./')
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports (.css, .scss, or .styles)
            ['^.+\\.s?css$', '\\.styles$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      // Import Plugin Rules
      'import/newline-after-import': ['error', { count: 1 }],

      // Unused imports
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // TypeScript & React
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },
];

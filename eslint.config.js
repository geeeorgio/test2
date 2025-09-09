module.exports = {
  root: true,
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg'],
      },
    },
  },
  extends: ['plugin:prettier/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
    'react-hooks',
    'simple-import-sort',
  ],
  rules: {
    // React hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // Imports
    'import/no-unresolved': ['error', { ignore: ['\\.svg$'] }],
    'import/no-named-as-default': 'off',
    'import/export': 'warn',

    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Node.js modules
          ['^(os|path|fs|child_process)$'],

          // packages
          ['^react', '^@?\\w'],

          // current project directories ('../../')
          ['^src/'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

          // SVG
          ['\\.svg$'],

          // styles
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',

    // Shadow variables
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    // Redeclare
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],

    // Consistent imports
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  globals: {
    JSX: true,
  },
};

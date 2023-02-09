module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: '13',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jest', 'check-file'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['warn', 'always'],
    'import/no-unresolved': 'warn',
    'react/no-unescaped-entities': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'public',
    'build',
    'android',
    'node_modules',
    'jest.config.js',
    'README.md',
    '*.css',
  ],
};

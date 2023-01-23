module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'prettier', ],
  ignorePatterns: ['**/*.d.ts', '/dist'],
  plugins: [
    'prettier',
  ],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        'space-before-function-paren': 0,
        semi: ['warn', 'always'],
        indent: ['warn', 2],
        singleQuote: true,
        tabWidth: 2,
        endOfLine: 'auto',
        printWidth: 80,
      },
    ],
    'comma-dangle': ['error', 'only-multiline'],
    'linebreak-style': ['error', 'windows'],
    'no-param-reassign': [2, {
      props: false
    }],
  },
  parser: '@babel/eslint-parser',
  overrides: [{
    files: ['**/*.{t,j}s?(x)'],
  }, ],
};

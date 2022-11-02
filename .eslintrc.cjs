module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-restricted-imports': 1,
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'jsx-a11y/label-has-associated-control': 1,
  },
};

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     'plugin:react/recommended',
//     'airbnb',
//   ],
//   overrides: [
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: [
//     'react',
//   ],
//   rules: {
//   },
// };

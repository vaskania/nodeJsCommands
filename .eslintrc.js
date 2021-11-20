module.exports = {
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    semi: 0,
    singleQuote: 0,
  },
};

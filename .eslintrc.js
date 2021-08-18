module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    "amd": true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'vue',
    'nuxt'
  ],
  rules: {}
};

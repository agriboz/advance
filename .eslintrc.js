module.exports = {
  root: true,
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  // required to lint *.vue files
  plugins: [
    'html',
    'vue'
  ],
  // add your custom rules here
  rules: {
    "space-before-function-paren": ["error", "always"]
  },
  globals: {}
}

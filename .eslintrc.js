module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "camelcase": "off",
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "max-len": [
      "error",
      {
        "code": 120,
        "tabWidth": 2,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "no-unused-vars": "off",
    "semi": [
      "error",
      "never"
    ],
    "space-in-parens": [
      "error",
      "always",
      {
        "exceptions": [
          "empty"
        ]
      }
    ],
    "quotes": [
      "error",
      "double",
      {
        "allowTemplateLiterals": true
      }
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "none",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "comma",
          "requireLast": true
        }
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false
      }
    ],
    "@typescript-eslint/no-namespace": [
      "error",
      {
        "allowDeclarations": true,
        "allowDefinitionFiles": true
      }
    ],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-empty-interface": "off"
  }
}

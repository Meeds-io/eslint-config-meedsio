module.exports = {
  env: {
    'node': true,
    'es6': true,
    'browser': true,
  },
  globals: {
    'Vue': true,
    'VueI18n': true,
    'VueEllipsis': true,
    'Vuetify': true,
    'eXo': true,
    '$': true,
    'global': true,
    'exoi18n': true,
    'extensionRegistry': true,
    'CKEDITOR': true,
    'cCometd': true,
  },
  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
  ],
  rules: {
    'max-len': ['error', {
      code: 80,
      tabWidth: 2,
      ignoreUrls: true
    }],
    'indent': [
      'error', 2
    ],
    'no-irregular-whitespace': 'error',
    'no-unexpected-multiline': 'error',
    'no-tabs': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'block-scoped-var': ['error'],
    'curly': ['error', 'all'],
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    'new-cap': ['error'],
    'new-parens': ['error'],
    'no-alert': ['error'],
    'no-await-in-loop': ['error'],
    'no-caller': ['error'],
    'no-confusing-arrow': ['error'],
    'no-console': ['warn', {'allow': ['error']}],
    'no-empty-function': ['error'],
    'no-eval': ['error'],
    'no-extra-label': ['error'],
    'no-extend-native': ['error'],
    'no-floating-decimal': ['error'],
    'no-implied-eval': ['error'],
    'no-iterator': ['error'],
    'no-labels': ['error'],
    'no-label-var': ['error'],
    'no-lone-blocks': ['error'],
    'no-loop-func': ['error'],
    'no-new-require': ['error'],
    'no-path-concat': ['error'],
    'no-process-env': ['error'],
    'no-process-exit': ['error'],
    'no-proto': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-shadow-restricted-names': ['error'],
    'no-sync': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-throw-literal': ['error'],
    'no-undefined': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-unused-expressions': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-concat': ['error'],
    'no-var': ['error'],
    'no-with': ['error'],
    'prefer-const': ['error'],
    'prefer-promise-reject-errors': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'prefer-template': ['error'],
    'quotes': ['error', 'single'],
    'require-await': ['error'],
    'semi': ['error', 'always'],
    'valid-jsdoc': ['error'],
    'yoda': ['error', 'never', { 'exceptRange': true }],
    'vue/max-attributes-per-line': ['warn', {
      'singleline': 2,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/singleline-html-element-content-newline': ['off'],
    'vue/html-self-closing': ['warn', {
      'html': {
        'void': 'never',
        'normal': 'never',
        'component': 'always'
      },
      'svg': 'never',
      'math': 'never'
    }],
    'vue/html-closing-bracket-newline': ['warn', {
      'singleline': 'never',
      'multiline': 'never'
    }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case']
  },
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 2018
  },
};
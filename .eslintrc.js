module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    "keyword-spacing": "error",
    "space-before-function-paren": ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
    "eqeqeq": ["error", "always"],
    "space-infix-ops": "error",
    "comma-spacing": "error",
    "brace-style": "error",
    "no-multiple-empty-lines": "error",
    "camelcase": "error",
    "key-spacing": "error",
    "semi": ["error","always"],
    "no-floating-decimal": "error",
    "no-multi-spaces": "error",
    "object-property-newline": "error",
    "padded-blocks": ["error", "never"],
    "space-before-blocks": "error",
    "space-in-parens": "error",
    "spaced-comment": "error",
    "id-length": ["error", { "exceptions": ["i", "j", "x"] }],
    "no-array-constructor": "error",
    "no-spaced-func": "error",
    "no-extra-semi": "error",
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
    "linebreak-style": ["error","windows"],
    "quotes": ["error","double"],
    "indent": ["error", 2],
  }
};
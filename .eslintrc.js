module.exports = {
    "root": [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      '@vue/standard'
    ],

    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended"
    ],

    root: true,

    env: {
      node: true
    },

    parserOptions: {
      parser: 'babel-eslint'
    },

    rules: {
      'no-unused-var': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
}

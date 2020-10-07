module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'import/no-named-as-default': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}

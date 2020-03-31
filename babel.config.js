module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false }],
    '@vue/cli-plugin-babel/preset'
  ],
  env: {
    test: {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
    }
  }
}

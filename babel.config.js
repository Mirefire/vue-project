const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/app',[
      '@babel/preset-env',
      {
        useBuiltIns:'entry'
      }
    ]
  ],
  plugins:prodPlugins
}

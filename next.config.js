const path = require('path')
const withReactSvg = require('next-react-svg')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'assets/img'),
  webpack(config, options) {
    return config
  }
})

module.exports = {

  sassOptions: {
    includePaths: [path.join(__dirname, 'sass')],
  },

  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    })
    return configuration
  },
}

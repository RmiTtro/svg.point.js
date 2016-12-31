const webpack = require('webpack')
const merge = require('webpack-merge')

const common = {
  entry: './src/svg.point.js'

, output: {
    path: __dirname + '/dist'
  , library: 'SVG'
  , libraryTarget: 'umd'
  }

, externals: {
    'svg.js': {
      commonjs: 'svg.js'
    , commonjs2: 'svg.js'
    , amd: 'svg'
    , root: 'SVG'
    }
  }
}

var config

// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
  case 'build:min':
    config = merge(common, {
      output: {
        filename: 'svg.point.min.js'
      }
    , plugins: [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
      ]
    })
    break

  case 'build':
  default:
    config = merge(common, {
      output: {
        filename: 'svg.point.js'
      }
    })
}

module.exports = config

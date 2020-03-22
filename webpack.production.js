const path = require('path')
const webpack = require('webpack');
require('dotenv').config()

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  // Allows us to do `import foo from 'foo'` rather than `import foo from 'foo.js'`
  resolve: {
    extensions: [ '.js', '.jsx', '.json' ]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
          loader: 'file-loader'
      }
    ]
  },

  plugins: [
      new (require('html-webpack-plugin'))({
          template: 'index.ejs',
          title: 'unitsix | react-boilerplate',
          tracking: process.env.ENABLE_TRACKING || false,
          monitoring: process.env.ENABLE_MONITORING || false,
          minify: {
              collapseWhitespace: true,
              collapseInlineTagWhitespace: true,
              removeTagWhitespace: true,
              removeRedundantAttributes: true,
              removeEmptyAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true
          }
      }),
      new webpack.DefinePlugin({
          'process.env.API_URL': JSON.stringify(process.env.API_URL),
          'process.env.IDP_UID': JSON.stringify(process.env.IDP_UID),
          'process.env.IDP_SECRET': JSON.stringify(process.env.IDP_SECRET),
          'process.env.NODE_ENV': JSON.stringify('production')
      }),
    new (require('uglifyjs-webpack-plugin'))()
  ],

  devServer: {
    host: '0.0.0.0'
  }
}

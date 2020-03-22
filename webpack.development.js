const path = require('path')
const webpack = require('webpack');
require('dotenv').config()
require("babel-polyfill");

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
      monitoring: process.env.ENABLE_MONITORING || false
    }),
    new webpack.DefinePlugin({
        'process.env':{
            'API_URL': JSON.stringify(process.env.API_URL),
            'IDP_UID': JSON.stringify(process.env.IDP_UID),
            'IDP_SECRET': JSON.stringify(process.env.IDP_SECRET),
        }
    })
  ],

  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true
  },
  node: {
      fs: 'empty'
  }
}
console.log(path.resolve(__dirname, 'dist'))

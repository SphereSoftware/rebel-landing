var rucksack = require('rucksack-css')
var precss = require('precss')
var lost = require('lost')
var webpack = require('webpack')
var path = require('path')
var plugins = [
  new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
  })
]

if(process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: true }
    })
  )
}

module.exports = {
  context: path.join(__dirname, './app'),
  entry: {
    jsx: './index.js',
    html: './index.html',
    vendor: [
      'lodash',
      'react-color',
      'react-debounce-input',
      'react-syntax-highlighter',
      'react',
      'react-dom',
      'react-router',
    ]
  },
  output: {
    path: path.join(__dirname, './docs'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        include: /app/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /app/,
        loader: 'style!css'
      },
      {
        test: /\.(png|jpg|)$/,
        loader: 'url-loader?limit=200000'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [
    precss({
      /* options */
    }),
    lost({
      /* options */
    }),
    rucksack({
      autoprefixer: true
    })
  ],
  plugins: plugins,
  devServer: {
    contentBase: './app',
    hot: true
  }
}

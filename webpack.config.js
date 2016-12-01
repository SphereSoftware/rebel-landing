const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const discardComments = require('postcss-discard-comments');
const dashboardPlugin = require('webpack-dashboard/plugin');

const isProd = process.env.NODE_ENV === 'production';

const PLUGINS = [
  new ExtractTextPlugin('app.css', { allChunks: true }),
  new webpack.DefinePlugin({
    'process.env.REACT_SYNTAX_HIGHLIGHTER_LIGHT_BUILD': true,
    'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
  }),
  new dashboardPlugin()
];

if (isProd) {
  PLUGINS.push(
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true
      }
    })
  )
}

module.exports = {
  devtool: isProd ? undefined : 'inline-source-map',
  context: path.join(__dirname, './app'),
  entry: {
    jsx: './index.js',
    html: './index.html'
  },
  output: {
    path: path.join(__dirname, './docs'),
    filename: 'app.js'
  },
  plugins: PLUGINS,
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        include: /app/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]!postcss?sourceMap')
      },
      {
        test: /\.css$/,
        exclude: /app/,
        loader: 'style!css'
      },
      {
        test: /\.(png|jpg|)$/,
        loader: 'url-loader?limit=200000'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'app/components']
  },
  postcss: function() {
    return [
      autoprefixer, precss, discardComments({removeAll: true})
    ];
  },
  devServer: {
    contentBase: './app',
    hot: true
  }
};

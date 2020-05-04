const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = [{
  devtool: 'source-map',
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'build.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
  externals: {
    '@trbl/react-html-element': '@trbl/react-html-element',
    'prop-types': 'prop-types',
    react: 'react',
    'react-dom': 'react-dom',
  },
}, {
  devtool: 'source-map',
  mode: 'production',
  entry: './demo/index.js',
  output: {
    filename: 'demo.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'demo/index.html',
    }),
  ],
}];

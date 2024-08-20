const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Other configurations...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
};
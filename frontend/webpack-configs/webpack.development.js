const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = () => ({
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    open: true,
    historyApiFallback: true,
    port: 4000
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
});

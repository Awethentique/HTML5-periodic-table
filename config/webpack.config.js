const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

const path = require('path');

// Configure Eslint
const configureEsLint = () => {
  return new ESLintPlugin({
      overrideConfigFile: path.resolve(__dirname, '../.eslintrc.js'),
      context: path.resolve(__dirname, '../sources/js'),
      fix: true,
      files: ['.', 'src', 'config'],
    });
}

// Configure Prettier
const configurePrettier = () => {
  return new PrettierPlugin();
}

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
      favicon: "./favicon.ico",
    }),
    new MiniCssExtractPlugin(),
    configureEsLint(),
    configurePrettier(),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader",
          },
        ],
      },
    ],
  },
};

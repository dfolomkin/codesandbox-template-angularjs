const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const cssLoadersCommonMixin = [
  { loader: 'style-loader' },
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      esModule: false,
    },
  },
  { loader: 'css-loader' },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          [
            'autoprefixer',
            {
              env: 'development',
            },
          ],
        ],
      },
    },
  },
];

module.exports = {
  mode: 'development',

  entry: {
    app: { import: './src/app/app.module.js', dependOn: 'vendors' },
    vendors: ['angular', 'angular-resource', 'angular-route'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-bundle.js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [['angularjs-annotate', { explicitOnly: true }]],
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [['angularjs-annotate', { explicitOnly: true }]],
            },
          },
          { loader: 'ts-loader' },
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [...cssLoadersCommonMixin],
      },
      {
        test: /\.less$/,
        use: [...cssLoadersCommonMixin, { loader: 'less-loader' }],
      },
      {
        test: /\.scss$/,
        use: [...cssLoadersCommonMixin, { loader: 'sass-loader' }],
      },
      {
        test: /\.(woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.(png|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tmpl.html',
      hash: true,
      minify: true,
      inject: 'head',
    }),
    new HtmlWebpackTagsPlugin({
      tags: ['styles/reset.css'],
      append: false,
      hash: true,
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/assets/styles/reset.css', to: 'styles' }],
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
    new ESLintPlugin({
      fix: true,
      quiet: true,
    }),
  ],

  resolve: {
    extensions: ['.js', '.ts', '.json', '.css', '.less', '.scss'],
    alias: {
      Components: path.resolve(__dirname, 'src/app/components'),
      Fonts: path.resolve(__dirname, 'scr/assets/fonts'),
      Images: path.resolve(__dirname, 'src/assets/images'),
      Styles: path.resolve(__dirname, 'src/assets/styles'),
    },
  },

  devtool: 'source-map',

  devServer: {
    static: './dist',
    hot: true,
    compress: true,
    port: 9000,
  },
};

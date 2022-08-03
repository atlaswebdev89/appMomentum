// webpack.config.js
const path = require('path');
// путь к источнику 
const pathSrc = path.resolve(__dirname, './app/');
// путь к папке билда
const pathDest= path.resolve(__dirname, './dist/');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Очищает выходной каталог при каждом запуске сборщика webPack
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// Копирование файлов
const CopyPlugin = require('copy-webpack-plugin');
// Сжатие JS
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        "js/main.bundle.js": pathSrc + '/js/index.js',
    },
    output: {
        path: pathDest,
        filename: '[name]',
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // css
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
              }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: pathSrc + '/index.html', // шаблон
            inject: 'body',
            filename: 'index.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),

        new CopyPlugin({
            patterns: [
            { from: pathSrc +"/images", to: "images", },
            { from: pathSrc + "/fonts", to: "fonts" },
          ]
        }),
    ],
}
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Очищает выходной каталог при каждом запуске сборщика webPack
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        "js/main.bundle.js": path.resolve(__dirname, './app/js/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './app/index.html'), // шаблон
            inject: 'body',
            filename: 'index.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),
    ],
}
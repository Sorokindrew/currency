const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.jsx'),
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg'],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, './src/assets/images'),
                to: path.resolve(__dirname, './dist/assets/images')
            },
            {
                from: path.resolve(__dirname, './src/assets/fonts'),
                to: path.resolve(__dirname, './dist/assets/fonts')
            }]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: "css-loader",
                    options: {
                        modules: true,
                    },
                }]
            },
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.(svg|png)?$/,
                use: ['file-loader']
            },
            {
                test: /\.ttf$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
    },
}
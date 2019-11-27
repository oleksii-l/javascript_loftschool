let webpack = require('webpack');
let HtmlPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let MiniCSSExtractPlugin = require('mini-css-extract-plugin');
let rules = require('./webpack.config.rules');
let path = require('path');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');

rules.push({
    test: /\.css$/,
    use: [
        MiniCSSExtractPlugin.loader,
        {
            loader: 'style-loader' 
        },
        {
            loader: 'css-loader' 
        }
    ]
});

module.exports = {
    entry: {
        main: './src/index.js',
        dnd: './src/dnd.js'
    },
    devServer: {
        index: 'dnd.html'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve('dist')
    },
    devtool: 'source-map',
    module: { rules },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                compress: {
                    drop_debugger: false
                }
            }
        }),
        new MiniCSSExtractPlugin('styles.css'),
        /* new HtmlPlugin({
            title: 'Main Homework',
            template: 'main.hbs',
            chunks: ['main']
        }), */
        new HtmlPlugin({
            title: 'Div Drag And Drop',
            template: 'dnd.hbs',
            filename: 'dnd.html',
            chunks: ['dnd']
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};

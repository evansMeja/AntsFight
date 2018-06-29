var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [path.resolve(__dirname, 'demo/src/index')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-0']
            }
        },
        { test: /\.css$/, loader: "style-loader!css-loader?importLoaders=1" }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: './index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CopyWebpackPlugin([
           { from: 'demo/resources' }
       ])
    ],
    resolve: {
        extensions: ['', '.js', '.es6.js', '.jsx', '.css']
    }
};

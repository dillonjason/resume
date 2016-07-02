const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.styleLoaders = function(paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loaders: ['style', 'css'],
                    include: paths
                },
                {
                    test: /\.s(c|a)ss$/,
                    loaders: ['style', 'css', 'sass'],
                    include: paths
                }
            ]
        }
    }
};

exports.styleExtracts = function(paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style', 'css'),
                    include: paths
                },
                {
                    test: /\.s(c|a)ss$/,
                    loader: ExtractTextPlugin.extract('style', 'css', 'sass'),
                    include: paths
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('[name].[chunkhash].css')
        ]
    }
};

exports.es6Loader = function(paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel',
                    include: paths
                }
            ]
        }
    }
};

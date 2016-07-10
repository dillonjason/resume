const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.styleLoaders = function(paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loaders: ['style', 'css'],
                    include: paths.styles
                },
                {
                    test: /\.s(c|a)ss$/,
                    loaders: ["style", "css?sourceMap!sass?sourceMap"],
                    include: paths.styles
                },
                {
                    test: /\.(jpg|png)$/,
                    loader: 'file?name=[path][name].[hash].[ext]',
                    include: paths.images
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
                    loader: ExtractTextPlugin.extract('style', 'css!postcss'),
                    include: paths.styles
                },
                {
                    test: /\.s(c|a)ss$/,
                    loader: ExtractTextPlugin.extract("style", "css!postcss!sass"),
                    include: paths.styles
                },
                {
                    test: /\.(jpg|png)$/,
                    loader: 'file?name=[path][name].[hash].[ext]',
                    include: paths.images
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

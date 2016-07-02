const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

exports.cleanWebpack = function(path) {
    return {
        plugins: [
            new CleanWebpackPlugin([path], {
                // Without `root` CleanWebpackPlugin won't point to our
                // project and will fail to work.
                root: process.cwd()
            })
        ]
    }
};

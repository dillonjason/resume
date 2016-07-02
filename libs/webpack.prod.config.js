const webpack = require('webpack');

exports.prodServer = function(options) {
    return {
        devtool: 'source-map',
        output: {
            path: options.PATHS.build,
            filename: '[name].[chunkhash].js',
            // This is used for require.ensure. The setup
            // will work without but this is useful to set.
            chunkFilename: '[chunkhash].js'
        }
    }
};
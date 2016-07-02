const webpack = require('webpack');

exports.extractBundle = function(options) {
    const entry = {};
    entry[options.name] = options.entries;

    return {
        entry: entry,
        plugins: [
            // Extract bundle and manifest files. Manifest is
            // needed for reliable caching.
            new webpack.optimize.CommonsChunkPlugin({
                names: [options.name, 'manifest']
            })
        ]
    }
};

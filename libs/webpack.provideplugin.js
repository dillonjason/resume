const webpack = require('webpack');

exports.setProvides = function(keyValues) {
    return {
        plugins: [
            new webpack.ProvidePlugin(keyValues)
        ]
    }
};

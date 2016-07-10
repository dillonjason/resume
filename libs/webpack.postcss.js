var autoprefixer = require('autoprefixer');

exports.setPostCSS = function() {
    return {
        postcss: function () {
            return [autoprefixer]
        }
    }
};

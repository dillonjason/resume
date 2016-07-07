var express = require('express');
var path = require('path');

var app = express();

var port = process.env.PORT;
var publicPath = path.resolve(__dirname, 'build');

// We point to our static assets
app.use(express.static(publicPath));

// And run the server
app.listen(port, function () {
    console.log('Server running on port ' + port);
});
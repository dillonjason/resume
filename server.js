var express = require('express');
var path = require('path');
var compression = require('compression');

var app = express();

var port = (process.env.PORT || 8080);
var publicPath = path.resolve(__dirname, 'build');

// Must be first
app.use(compression());

// We point to our static assets
app.use(express.static(publicPath));

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
    res.sendFile(path.join(publicPath, 'index.html'))
})

// And run the server
app.listen(port, function () {
    console.log('Server running on port ' + port);
});
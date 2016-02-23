var express = require('express');
var app = express();
var port = 5000;
app.get('/', function(req, res) {
res.send('This is node2');
});
app.listen(process.env.PORT || port, function(error) {
console.log('Running node2 server on port ' + port);
});
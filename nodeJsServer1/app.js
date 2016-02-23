var express = require('express');
var app = express();
var port = 4000;
app.get('/', function(req, res) {
res.send('This is node1');
});
app.listen(process.env.PORT || port, function(error) {
console.log('Running node1 server on port ' + port);
});
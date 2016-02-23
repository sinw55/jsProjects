var express = require('express');
var app = express();
var port = 3000;
app.get('/', function(req, res) {
res.send('This is node3');
});
app.listen(process.env.PORT || port, function(error) {
console.log('Running node3 server on port ' + port);
});
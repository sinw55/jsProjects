var express = require('express');

var app = express();
var port = process.env.PORT || 5000;

// help set middle ware
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
	// res.send('hello world');
	res.render('index');
});

app.listen(port, function(error) {
	console.log('Running server on port ' + port);
});
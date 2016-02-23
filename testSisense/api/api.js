var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	User = require('./models/user.js'),
	jwt = require('./services/jwt.js');


var app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

app.post('/register', function(req, res) {
	var user = req.body;

	var newUser = new User.model({
		email: user.email,
		password: user.password
	});

	var payload = {
		iss: req.hostname,
		sub: user._id
	};

	// temp secret key: later this will be replaced with sisense secret key
	var token = jwt.encode(payload, 'secretkey');

	newUser.save(function(err) {
		//res.status(200).json(newUser);
		//res.status(200).send(newUser.toJSON());
		res.status(200).send({
			user: newUser.toJSON(),
			token: token
		});
	});
});

mongoose.connect('mongodb://localhost/sisense');


console.log(jwt.encode('hi', 'secret'));

var server = app.listen(3000, function() {
	console.log('api listening on ', server.address().port)
});
var express = require('express');
var app = express();

app.get('/delay', function(req, res) {
	setTimeout(function() {
	res.send('<h1>Oh, hey! How long have you been waiting? I did not even know you were there...</h1>');
	}, 5000);
});

var server = app.listen(7145, function() {
	console.log('Express server listening on port ' + server.address().port);
});

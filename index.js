const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/json', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'json', 'dashboard.json'));
});

app.listen(5050, function() {
	console.log('Test server listening on port 5050!');
});
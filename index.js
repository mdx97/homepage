const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Not using now that we are using the api.
app.get('/json', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'json', 'dashboard.json'));
});

app.listen(3000, function() {
	console.log('Homepage server listening on port 3000!');
});
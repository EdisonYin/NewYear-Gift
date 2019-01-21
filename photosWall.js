'user strict'

var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('{"data": "8091"}');
})

app.listen(8091);
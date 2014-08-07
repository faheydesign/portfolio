'use strict';
var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + '/dist'));

var server = http.createServer(app);

var port = process.env.PORT || 3000;

server.listen(port, function(){
  console.log('Server has started on port ' + port);
});

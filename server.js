var http = require('http');
var static = require('node-static');
var route = require('./router');
var file = new static.Server('./public');

function onRequest(req, res) {
 	route.router(req, res, file);
}  

http.createServer(onRequest).listen(3000);





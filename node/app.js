var http = require('http');

http.createServer(function (req,res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('Welcomr to node');
}).listen(8588, '127.0.0.1');

console.log('Server started at http://127.0.0.1:8588');
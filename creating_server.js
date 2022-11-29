var http = require('http');

// create a server object

http.createServer(function(req, res){
    res.writeHead(200,{'Content-type': 'text/html'});
    res.end('Hello World! this is my first node code');// end of response

}).listen(8080);// the server listen to port 8080

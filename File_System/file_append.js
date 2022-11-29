var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){

    fs.appendFile('mynewfile1.txt','Hello World!', function(err){
        if (err) throw err;
        console.log('Saved');
    });
}).listen(8080);
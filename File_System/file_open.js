var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.open('mynewfile2.txt','w', function(err, file){
        // res.writeHead(200,'{Content-Type}', 'text/html');
        if (err) throw err
        console.log('Saved');

    });
}).listen(8080)
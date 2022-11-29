var http = require ('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.writeFile('mynewfile3.txt', 'Hello Content! this is write file', function(err){
        if (err) throw err;
        console.log('Saved');
    });
}).listen(8080);
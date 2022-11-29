const http = require('http');
const url = require('url');

const server = http.createServer((req, res)=>{
    
    const pathName = req.url;
    if(pathName==='/'||pathName==='/overview'){
        res.end('This is the OVERVIEW');
    } else if(pathName==='/product'){
        res.end('This is the PRODUCT');
    } else{
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });
        res.end('<h1>Page not found!</h1>');

    }


    
});
server.listen(8080, ()=>{
    console.log('Listening to port 8080')
})
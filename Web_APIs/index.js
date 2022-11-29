const http = require('http');
const url = require('url');
const fs = require('fs');

//SERVER

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
    const dataObj = JSON.parse(data);


const server = http.createServer((req, res)=>{
    const pathName = req.url;
    if (pathName==='/'|| pathName==='/overview'){
        res.end('This is the Overview');
    } else if(pathName==='/product'){
        res.end('This is the product');
    }else if(pathName==='/api'){      
            res.writeHead(200,{'Content-Type': 'application/json'});
            res.end(data);
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
    }
});
server.listen(8080,()=>{
    console.log('start at port 8080')
});
const http = require('http');

const fs = require('fs');

const server = http.createServer((req,res) => {
    console.log(`looking for route: ${req.url}`);

    if(req.url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        const readStream = fs.createReadStream(__dirname + '/about.html')
        readStream.pipe(res)
    } else if (req.url === '/404') {
        res.writeHead(200, {'content-type': 'text/html'})
        const readStream2 = fs.createReadStream(__dirname + '/404.html')
    readStream2.pipe(res)

    }


});

server.listen(3000, () => {
    console.log('server listening on port 3000') 
})







const fs = require('fs');
const http = require('http');


const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')


    console.log(req.url);
    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1> This is subhrajeet</h1> <p> this is nodejs by subhrajeet </p>');

    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1> about subhrajeet</h1> <p> about nodejs by subhrajeet </p>');
    } else if (req.url == '/subhrajeet') {
        res.statusCode = 200;
        const data = fs.readFile('index.html', (err, dt) => {
            if (!err) {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.end(dt)
            } else {
                res.Head(500, { 'Content-Type': 'text/plain' })
                res.end("500")
            }
        });

    } else {

        res.statusCode = 404;
        res.end('<h1> not found </h1> <p> page not found which you want to find </p>')
    }

});
server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

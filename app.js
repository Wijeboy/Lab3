const fs = require('fs');

fs.writeFile('file.txt', 'Hello World!', (err) => {
    if (err) throw err;
    console.log('File saved!');
});
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello World!');
    res.end();
}).listen(8080);
const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Hello, this is Ayush Nigam!');
});

const port = 4000;
server.listen(port, () => {
    console.log('AYUSH NIGAM');
});
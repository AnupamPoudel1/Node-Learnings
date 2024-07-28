const http = require('http');

const server = http.createServer((req, res) => {
    console.log('User hit the server');
    res.end('Home Page');
});

// Every response must end with .end to signify browser that the response is done.

server.listen(3000);

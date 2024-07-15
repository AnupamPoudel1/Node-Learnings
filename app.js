const http = require('node:http');

const server = http.createServer((req, res) => {
    // the request is a large object 
    // we can see request in console log
    console.log(req);

    // response given by the server to the request
    res.write('Hello World!!!');
    res.write('\n');
    res.write('Welcome to our Homepage');
    res.end();
});

// port number in which the server works on
server.listen(3000);

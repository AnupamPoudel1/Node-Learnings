const http = require('http');

// Creating a server without using EventEmitter - HTTP module
// const server = http.createServer((req, res) => {
//     res.end('Welcome');
// });

// Using EventEmitter API
const server = http.createServer();

// emits request event
// subscribe to it/ listen to it/ respond to it
server.on('request', (req, res) => {
    res.end('Welcome To Our Page');
})

server.listen(3500);

// Likewise there are several events in http that we can check in the documentation of the node.js
// We need to explore that on our own

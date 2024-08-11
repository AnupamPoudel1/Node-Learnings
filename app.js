const http = require('http');

// The content type in header matters
// We can see in the following example that:
// We are sending response as html but the content type is text/plain.
// So when the response displays in browser we will get: <h1>Home Page</h1> as output.
// But if we will keep content type as text/html then the output will he Home Page in heading 1.
const server = http.createServer((req, res) => {
    res.writeHead(
        200, 
        // {'content-type':'text/html'},
        {'content-type':'text/plain'}
    );
    res.write('<h1>Home Page</h1>');
    res.end();
});

server.listen(3500);

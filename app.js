const http = require('node:http');

const server = http.createServer((req, res) => {
    // // the request is a large object 
    // // we can see request in console log
    // console.log(req);

    // // response given by the server to the request
    // res.write('Hello World!!!');
    // res.write('\n');
    // res.write('Welcome to our Homepage');
    // res.end();

    // exploring features
    if (req.url === '/') {
        res.write('Hello!!! everyone, this is our homepage.\nYou are welcome.');
        res.end();
    } else if (req.url === '/about') {
        // we can also write what we want to display in end directly
        res.end('Hello!!! everyone, this is our about page.\nYou can check out about us here.');
    } else {
        // we can also write html tags inside the template literals (``)
        res.end(`
            <h1>OOPS!!!!</h1>
            <p>We cannot find the page you requested for.</p>
            <a href='/'>Go Back</a>
        `)
    }
});

// port number in which the server works on
server.listen(3000);

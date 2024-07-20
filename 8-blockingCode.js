const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page');
    }
    if (req.url === '/about') {
        // blocking code: This code will not only stop contact page but also home page and other pages.
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`i: ${i} + j: ${j}`);
            }
        }
        res.end('About Page');
    }
    if (req.url === '/contact') {
        res.end('Contact Page');
    }
    res.end('Error Page');

});

server.listen(3500, () => {
    console.log('Server running in port 3500');
});
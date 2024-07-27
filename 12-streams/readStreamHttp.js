const http = require('http');
const fs = require('fs');

// http
//     .createServer((req, res) => {
//         const text = fs.readFileSync('./content/big.txt', 'utf-8');
//         res.end(text);
//     })
//     .listen(3000);

// this is also a way to display large files in browser 
// But if we check the network tab in console we can see that:
// 1) The file response was 1.8mb 
// 2) So accessing that big file once creates problems 
// 3) So, we use readFileStream to read the data in chunks
// example given below

http
    .createServer((req, res) => {
        const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');
        fileStream.on('open', () => {
            fileStream.pipe(res);
        })
        fileStream.on('error', (err) => {
            res.end(err);
        })
    })
    .listen(3000);

// So even after this the file size we get in network is still same 
// But if we check the details 
// It's written that its transfer encoding is chunked 
// That means that we are getting the data in chunks 
// This helps in loading big files easily

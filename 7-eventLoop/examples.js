// This is an example of event loop.
// In the code given bleow, the second task would be printed at last regardless of how many console.log are after final task.
console.log("First Task");

setTimeout(() => {
    console.log("Second Task");
}, 0);

console.log("Third Task");
console.log("Fourth Task");
console.log("Fifth task");
console.log("Sixth task");
console.log("Seventh task");
console.log("Eighth task");
console.log("Ninth task");
console.log("Final task");


// Second Example of event loop
// similar to above example the first task is not completed before other task are executed
const { readFile } = require('fs');

console.log('Started First Task');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log("Error:" + err);
        return;
    }
    console.log(result);
    console.log('Completed First Task');
});

console.log('Started Second Task');



// Third Example of event loop
setInterval(() => {
    console.log('This is the first task');
}, 2000);

console.log('This is the second task');

// Third example using createServer
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('event requested');
    res.end('Hello World');
});

server.listen(3500, () => {
    console.log('Server running on port 3500 .................');
});

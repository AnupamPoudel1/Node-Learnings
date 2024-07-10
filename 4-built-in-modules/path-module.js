// path module
const path = require('path');

// path seperator
console.log(path.sep);

// join operation
const filePath = path.join('/testFolder','subTestFolder', 'test.txt');
console.log(filePath);

// base file name
const base = path.basename(filePath);
console.log(base);

// resolve path
const absolutePath = path.resolve(__dirname, 'testFolder','subTestFolder', 'test.txt');
console.log(absolutePath);

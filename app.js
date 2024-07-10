// path module
const path = require('path');

// path seperator
console.log(path.sep);

// join operation
const filePath = path.join('/3-modules','main.js');
console.log(filePath);

// base file name
const base = path.basename(filePath);
console.log(base);

// resolve path
const absolutePath = path.resolve(__dirname, '3-modules', 'main.js');
console.log(absolutePath);

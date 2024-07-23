const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt');

stream.on('data', (result) => {
  console.log(result);  
})

// As we can see in output
// Instead of reading all the data in the file 
// The readStream reads it in chunks
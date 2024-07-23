const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt');
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf-8' });

// Default size - 65kb
// Last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });
// const stream = createReadStream('./content/big.txt', { encoding: 'utf-8' });


stream.on('data', (result) => {
    console.log(result);
})

// As we can see in output
// Instead of reading all the data in the file
// The readStream reads it in chunks

// There is also an error event
// Example:
stream.on('error', (err) => {
    console.log(err);
})
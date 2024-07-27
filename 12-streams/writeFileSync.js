// Just to write a big file to show createReadStream.
const { writeFileSync } = require('fs');

for (let i = 0; i < 100000; i++) {
    writeFileSync('./content/big.txt', `Hello World: ${i}\n`, { flag: 'a' });
}

// To check streak
// using util library to do what we did in 9th chapter
const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const readWrite = async () => {
    try {
        const first = await readFilePromise('./7-eventLoop/content/first.txt', 'utf-8');
        const second = await readFilePromise('./7-eventLoop/content/second.txt', 'utf-8');
        await writeFilePromise('./7-eventLoop/content/third.txt', `Third File inside content folder contains: ${first} ${second}`);
        const third = await readFilePromise('./7-eventLoop/content/third.txt', 'utf-8');
        console.log(first, second);
        console.log(third);
    } catch (err) {
        console.log(err);
    }
}

readWrite();

// Asynchronous Fs Module examples and practices
const { readFile, writeFile } = require('fs');

readFile('./contents/subfolder/aboutMe.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log('Error:' + err);
        return;
    }
    console.log(result);
});

// Callback hell example
readFile('./contents/subfolder/information.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log('Error:' + err);
        return;
    }
    const first = result;
    console.log(first);
    readFile('./contents/subfolder/education.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        const second = result;
        console.log(second);
        writeFile(
            './contents/subfolder/aboutAsync.txt',
            `The combined detail from information and education: ${first} ${second}`,
            (err, result) => {
                if (err) {
                    console.log('Error:' + err);
                    return;
                }
                const third = result;
                console.log(third);
            });
    });
});

// callback hell can be avoided using async await type of fs
// Examples

const fsPromises = require('fs').promises;
const path = require('path');

const fileOp = async () => {
    try {
        let first = await fsPromises.readFile('./contents/subfolder/information.txt', 'utf-8');
        let second = await fsPromises.readFile('./contents/subfolder/education.txt', 'utf-8');
        await fsPromises.writeFile(
            './contents/subfolder/aboutAsync.txt',
            `The combined detail from information and education: ${first} ${second}`
        );
        console.log(first, second);
    } catch (err) {
        console.log("Error:" + err);
    }
}

fileOp();

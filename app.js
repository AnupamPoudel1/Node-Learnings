const { readFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// getText('./7-eventLoop/content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));


// I dont know why but here the first is getting print but the second is not getting printed.
// There are no visible errors as well.
// But the main point of the code is how can we use async and await to resolve promises.
const start = async () => {
    try {
        const first = await getText('./7-eventLoop/content/first.txt');
        const second = await getText('./7-eventLoop/content/second.txt');
        console.log(first);
        console.log(second);
    } catch (err) {
        console.log(err);
    }
}

start()

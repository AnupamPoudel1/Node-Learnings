// The below given code is an example of how we can use promises.
// There is better ways to use promises that we will explore later.
// As the task inreases this as well gets complicated over time.

const { readFile } = require('fs');

// I was today years old when i knew that we cannot write (resolve, reject)
// It is apparantly wrong. We must write (reject, resolve)
const getText = (path) => {
    return new Promise((reject, resolve) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

getText('./7-eventLoop/content/first.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

// using async await
// There is better way to do this that we will explore later

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

start();

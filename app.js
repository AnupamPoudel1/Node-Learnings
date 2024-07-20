const { readFile } = require('fs');

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

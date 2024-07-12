// File module (Fs module sync)

// different approach of require
// const fs = require('fs');
// fs.readFileSync();
// fs.writeFileSync();

const { readFileSync, writeFileSync } = require('fs');

const information = readFileSync('./contents/subfolder/information.txt', 'utf-8');
const education = readFileSync('./contents/subfolder/education.txt', 'utf-8');

console.log(information, education);

// This overwrites the contents previously written in the file.
writeFileSync(
    './contents/subfolder/aboutMe.txt',
    `The combined detail from information and education: ${information} ${education}`
);

// to append to the file we need to add an object after content with a flag a where a is append
writeFileSync(
    './contents/subfolder/aboutMe.txt',
    `The combined detail from information and education: ${information} ${education}`,
    {
        flag: 'a'
    }
);

const aboutMe = readFileSync('./contents/subfolder/aboutMe.txt', 'utf-8');

console.log(aboutMe);

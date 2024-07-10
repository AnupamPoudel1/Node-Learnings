// modules
// Common JS, every file is a module (by defaut)
// Modules - Encapsulated Code (Only share minimum)

const names = require('./names');
// it can be destructured as
// const { firstName, secondName } = require('./names');

const printName = require('./function');

// or the names module can also be destructured as fllow
printName(names.firstName);
printName(names.secondName);

// for alternate
const {items, singlePerson} = require('./alternate');

console.log(items);
console.log(singlePerson);

// The above given or below given both are possible

// const data = require('./alternate');

// console.log(data);
// console.log(data.singlePerson);
// console.log(data.items);



// alternate 2
require('./alternate2');

// Even tho we didnt export anything in alternate2 file we still got the result of the sum function running there.
// if there is a function running in the file we required then it will show the result.
// modules
// Common JS, every file is a module (by defaut)
// Modules - Encapsulated Code (Only share minimum)

const names = require('./3-modules/names');
// it can be destructured as
// const { firstName, secondName } = require('./3-modules/names');

const printName = require('./3-modules/function');

// or the names module can also be destructured as fllow
printName(names.firstName);
printName(names.secondName);

// for alternate
const {items, singlePerson} = require('./3-modules/alternate');

console.log(items);
console.log(singlePerson);

// The above given or below given both are possible

// const data = require('./3-modules/alternate');

// console.log(data);
// console.log(data.singlePerson);
// console.log(data.items);


// alternate 2
require('./3-modules/alternate2');

// Even tho we didnt export anything in alternate2 file we still got the result of the sum function running there.
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
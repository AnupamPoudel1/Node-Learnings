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

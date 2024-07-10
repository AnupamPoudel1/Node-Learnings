// OS module
const os = require('os');

// info about the user
const user = os.userInfo();
console.log(user);

// system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

// system information
const osInfo = {
    name: os.type(),
    release: os.release(),
    version: os.version(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(osInfo);
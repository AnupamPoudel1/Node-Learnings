const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// There are many methods in emitter class
// The two that we are most interested on is:
// on - listen for an event
// emit - emit an event

// While using on method we give in an event.
// In this case event is 'response'
// And we pass in a callback function
customEmitter.on('response', () => {
    console.log(`Data Received`);
})

// We can have as many functions as we want in on method of EventEmitter
// For example the function below also functions as well as the one above even tho they have same event
customEmitter.on('response', () => {
    console.log(`Another Logic Implemented`);
})

customEmitter.on('response', () => {
    console.log(`Third Logic Implemented`);
})
// We will get all three console.log as output while emitting the event 'response'

// Then we use emit to emit an event
// The event in emit method should be same as the one on the on method
// In this case the event is 'response' 
customEmitter.emit('response');

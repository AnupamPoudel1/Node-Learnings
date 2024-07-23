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

// Then we use emit to emit an event
// The event in emit method should be same as the one on the on method
// In this case the event is 'response' 
customEmitter.emit('response');

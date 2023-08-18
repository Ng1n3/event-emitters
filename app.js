//import necessary modules, both inbuilt and thirdparty.
const logEvents= require('./logEvent');
const EventEmitter = require('events');

//extend emitter class
class MyEmitter extends EventEmitter {}

// initialize object
const myEmitter = new MyEmitter();

//add listener for the log event
myEmitter.on('log', (msg) => logEvents(msg))

// emit listner for the log event.
myEmitter.emit('log', 'Log event Emitted!');
//import necessary modules, both inbuilt and thirdparty.
const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path');
const {v4: uuid} = require('uuid');
const {format} = require('date-fns');
const { EventEmitter } = require('events');
const EventLog = require('./logEvent');

//extend emitter class
class MyEmitter extends EventEmitter() {}

// initialize object
const myEmitter = new MyEmitter();

//add listener for the log event
myEmitter.on('log', (msg) => EventLog(msg))

// emit listner for the log event.
myEmitter.emit('log', 'Log event Emitted!');
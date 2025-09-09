const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
    console.log('an event occured @');
    setDefaultHighWaterMark(() => {
        console.log('please end up the event ');
    }, 3000);
});
// myEmitter.emit('event');
console.log('event is running')
myEmitter.emit('event');
console.log('event is still running')

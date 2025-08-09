const eventEmitter = require('events')

const myEmitter = new eventEmitter()

function greeting(){
    console.log('Happy Sunday');
}

myEmitter.on('greet',greeting)

// myEmitter.emit('greet')

myEmitter.off('greet',greeting)

myEmitter.emit('greet')

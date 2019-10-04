'use strict';

const Queue = require('./queue');
const DoubleQueue = require('./doubleQueue');
const { peek, isEmpty, display } = require('./queueFns');

function queueTest () {
  const starTrekQ = new Queue();
  
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhara');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  
  display(starTrekQ);
  console.log('###############');

  starTrekQ.dequeue();
  starTrekQ.dequeue();

  display(starTrekQ);
    
}
// queueTest();

function doubleQueueTest () {
  const starTrekQ = new DoubleQueue();
  
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhara');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  
  // display(starTrekQ);
  // console.log('###############');

  starTrekQ.dequeue();
  starTrekQ.dequeue();

  // display(starTrekQ);
  console.log(peek(starTrekQ));
    
}
doubleQueueTest();
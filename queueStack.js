'use strict';
const Stack = require('./stack');

class stackQueue {
  constructor () {
    this.queue = new Stack();
    this.first = null;
    this.last = null;
  }

  enqueue (item) {
    this.queue.push(item);
  }

  dequeue () {
    this.queue.pop();
  }
}

module.exports = stackQueue;
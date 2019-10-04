'use strict';

class _Node {
  constructor (value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor () {
    this.first = null;
    this.last = null;
  }
  
  enqueue (data) {
    const newNode = new _Node(data, null);
    this.last = newNode;
    if (!this.first) this.first = newNode;
  }
  
  dequeue () {
    if (!this.first) return null;
    const node = this.first.value;
    if (this.first.next === null) this.last = null;
    this.first = this.first.next;
    return node;
  }
}
  
module.exports = Queue;
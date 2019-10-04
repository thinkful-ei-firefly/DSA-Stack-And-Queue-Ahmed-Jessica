'use strict';

function peek (queue) {
  if (!queue.first) return null;
  return queue.first.value;
}

function isEmpty (queue) {
  return (queue.first === null);
}

function display (queue) {
  let currNode = queue.first;
  if (currNode === null) console.log('empty queue');
  while (currNode.next !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
  console.log(currNode.value);
}

module.exports = { peek, isEmpty, display };
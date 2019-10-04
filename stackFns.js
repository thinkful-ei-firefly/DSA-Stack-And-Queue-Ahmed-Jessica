'use strict';

const Stack = require('./stack');

function peek (stack) {
  if (!stack.top) return null;
  return stack.top.value;
}

function isEmpty (stack) {
  return (stack.top === null);
}

function display (stack) {
  let currNode = stack.top;
  if (currNode === null) console.log('empty stack');
  while (currNode.next !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
  console.log(currNode.value);
}

function is_palindrome (string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  if (string.length <= 1) return true;
  const firstHalfEndIndex = Math.floor((string.length-2)/2);
  const secondHalfStartIndex = Math.ceil((string.length/2));

  const charStack = new Stack();

  for (let i=0; i<= firstHalfEndIndex; i++) {
    charStack.push(string[i]);
  }

  for (let i=secondHalfStartIndex; i<string.length; i++) {
    if (string[i] !== charStack.pop()) return false;
  }
  return true;

  //compare front half of a string to the back half the string
  //ignore the character in the middle if the string has an odd number of chars
  //iterate through the first half of the string and push chars to a stack
  //then iterate through the second half of the string and compare the top char in stack
  //to the next char of the word
  //if at any point stackChar !== stringChar, return false
  //else, return true
}

module.exports = { peek, isEmpty, display, is_palindrome };
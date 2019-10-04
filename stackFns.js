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

function parenthesisCheck (string) {
  //iterate through the given string
  //push "(" parenthesis (only parenthesis) to the stack when found
  //pop the stack when ")" is found
  //if at the end of the string, the stack still has something on it, we have unclosed parenthesis
  //while iterating, if we try to pop an empty stack, we're missing open parenthesis
  if (!string.length) return null;
  const parenStack = new Stack();
  for (let i=0; i<string.length; i++) {
    if (string[i] === '(') {
      parenStack.push('(');
    }
    if (string[i] === ')') {
      if (isEmpty(parenStack)) {
        console.log('you are missing a "("');
        return false;
      }
      parenStack.pop();
    }
  }
  if (!isEmpty(parenStack)) {
    console.log('you are missing a ")"');
    return false;
  }
  return true;
}

function sortStack (stack) {
  if (stack.top === null || stack.top.next === null) return stack;
  //iterate through the given stack once and identify minValue and maxValue.
  //push maxValue to newStack.top
  //iterate through the given stack again to find the next largest number
  //that is less than newStack.top
  //once we've taken one pass through the given stack, we will push the current value
  //of largestValue to newStack
  //run this iteration until newStack.top === minValue  
  
  const newStack = new Stack();
  let minValue = stack.top.value;
  let maxValue = stack.top.value;
  let currNode = stack.top;
  while (currNode.next !== null) {
    if (currNode.value > maxValue) maxValue = currNode.value;
    if (currNode.value < minValue) minValue = currNode.value;
    currNode = currNode.next;
  }
  if (currNode.value > maxValue) maxValue = currNode.value;
  if (currNode.value < minValue) minValue = currNode.value;

  newStack.push(maxValue);

  while (newStack.top.value !== minValue) {
    let currNode = stack.top;
    let currMax = minValue;
    
    while (currNode.next !== null) {
      if (currNode.value > currMax && currNode.value < newStack.top.value) {
        currMax = currNode.value;
      }
      currNode = currNode.next;
    }
    if (currNode.value > currMax && currNode.value < newStack.top.value) {
      currMax = currNode.value;
    }
    newStack.push(currMax);
  }

  return newStack;
}

module.exports = { peek, isEmpty, display, is_palindrome, parenthesisCheck, sortStack };
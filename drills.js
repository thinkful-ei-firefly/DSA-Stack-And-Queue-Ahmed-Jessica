'use strict';

const Stack = require('./stack');
const { peek, isEmpty, display, is_palindrome } = require('./stackFns');

function main () {
  const starTrek = new Stack();

  console.log(isEmpty(starTrek));

  console.log('#######');

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  display(starTrek);

  starTrek.pop();

  console.log('#######');

  display(starTrek);

  console.log('#######');

  console.log(isEmpty(starTrek));

  console.log('#######');

  console.log(peek(starTrek));

}

function palindromeTest () {
  console.log(is_palindrome('dad'));
  console.log(is_palindrome('1001'));
  console.log(is_palindrome('A man, a plan, a canal: Panama'));
  console.log(is_palindrome('The quick brown fox jumps over the lazy dog'));
}
// palindromeTest();
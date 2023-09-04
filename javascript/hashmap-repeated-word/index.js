'use strict';
function repeatedWord(string) {
  const words = string.toLowerCase().match(/[a-z]+/g);
  const wordSet = new Set();

  for (const word of words) {
    if (wordSet.has(word)) {
      return word;
    }
    wordSet.add(word);
  }

  return null;
}

const input1 = 'Once upon a time, there was a brave princess who...';
const input2 = 'The quick brown fox jumps over the lazy dog.';
const input3 = 'This sentence has a repeated word. This sentence has a repeated word.';

console.log(repeatedWord(input1)); // Output: 'a'
console.log(repeatedWord(input2)); // Output: null (no repeated words)
console.log(repeatedWord(input3)); // Output: 'this' (repeated word)

module.exports = repeatedWord;
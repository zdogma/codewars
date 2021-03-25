import {assert} from 'chai';

// Solution
const spinWords = (words: string): string => {
  return words
    .split(' ')
    .map(word => (word.length >= 5 ? word.split('').reverse().join('') : word))
    .join(' ');
};

// Sample Test
describe('spinWords', () => {
  it('should pass a sample test', () => {
    assert.strictEqual(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw');
  });
});

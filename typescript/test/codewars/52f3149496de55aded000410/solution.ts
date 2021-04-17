import {assert} from 'chai';
import {describe, it} from 'mocha';

// Solution
/// Another Solution:
/// Math.abs(number) for removing '-'
const sumDigits = (number: number): number => {
  return number
    .toString()
    .split('')
    .filter(char => char !== '-')
    .map(char => parseInt(char))
    .reduce((sum, num) => sum + num, 0);
};

// Sample Test
describe('sumDigits', () => {
  it('sample tests', () => {
    assert.equal(sumDigits(10), 1);
    assert.equal(sumDigits(99), 18);
    assert.equal(sumDigits(-32), 5);
  });
});

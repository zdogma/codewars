import {assert} from 'chai';
import {describe, it} from 'mocha';

// Solution
const digitalRoot = (number: number): number => {
  const resultNum = Math.abs(number)
    .toString()
    .split('')
    .map(char => parseInt(char))
    .reduce((sum, num) => sum + num, 0);
  return number > 10 ? digitalRoot(resultNum) : resultNum;
};

// Sample Test
describe('digitalRoot', () => {
  it('should work for basic tests', () => {
    assert.equal(digitalRoot(16), 7);
    assert.equal(digitalRoot(456), 6);
  });
});

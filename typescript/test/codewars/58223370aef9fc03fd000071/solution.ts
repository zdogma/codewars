import {assert} from 'chai';
import {describe, it} from 'mocha';

// Solution
const dashatize = (num: number): string => {
  return Math.abs(num)
    .toString()
    .split('')
    .map(str => (str.match(/[13579]/) ? `-${str}-` : str))
    .join('')
    .replace(/--/g, '-')
    .replace(/^-|-$/g, '');
};

// Sample Test
describe('dashatize', () => {
  it('Basic', () => {
    assert.equal(dashatize(274), '2-7-4');
    assert.equal(dashatize(5311), '5-3-1-1');
    assert.equal(dashatize(86320), '86-3-20');
    assert.equal(dashatize(974302), '9-7-4-3-02');
  });
  it('Weird', () => {
    assert.equal(dashatize(NaN), 'NaN');
    assert.equal(dashatize(0), '0');
    assert.equal(dashatize(-1), '1');
    assert.equal(dashatize(-28369), '28-3-6-9');
  });
});

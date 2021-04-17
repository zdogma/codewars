import {assert} from 'chai';
import {describe, it} from 'mocha';

// Solution
const xo = (string: string): boolean => {
  const chars = string.split('').map(char => char.toLowerCase());
  const xNum = chars.filter(char => char === 'x').length;
  const oNum = chars.filter(char => char === 'o').length;

  return xNum === oNum;
};

// Sample Test
describe('xo', () => {
  it('Basic Tests', () => {
    assert.strictEqual(xo('xo'), true);
    assert.strictEqual(xo('xxOo'), true);
    assert.strictEqual(xo('xxxm'), false);
    assert.strictEqual(xo('Oo'), false);
    assert.strictEqual(xo('ooom'), false);
  });
});

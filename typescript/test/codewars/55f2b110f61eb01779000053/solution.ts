import {assert} from 'chai';
import {describe, it} from 'mocha';

// Solution
// Another Solution:
//   return (Math.abs(a - b) + 1) * (a + b) / 2;
//   ※ 等差数列の和として算出している
function getSum(a: number, b: number): number {
  const [from, to] = [a, b].sort((a, b) => a - b);
  return Array.from(
    {length: Math.abs(to - from + 1)},
    (_, i) => from + i
  ).reduce((a, v) => a + v, 0);
}

// Sample Test
describe('getSum', () => {
  it('Sample Tests', () => {
    assert.strictEqual(getSum(0, -1), -1);
    assert.strictEqual(getSum(0, 1), 1);
    assert.strictEqual(getSum(1, 1), 1);
    assert.strictEqual(getSum(-5, -1), -15);
  });
});

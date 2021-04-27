import {assert} from 'chai';
import {describe, it} from 'mocha';

// Solution
const fibonacciSequence = function* (): Iterator<number> {
  let [a, b] = [1, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
};

// Sample Test
describe('FibonacciStreamTest', () => {
  it('testFirstThirty', () => {
    const expected = [
      1,
      1,
      2,
      3,
      5,
      8,
      13,
      21,
      34,
      55,
      89,
      144,
      233,
      377,
      610,
      987,
      1597,
      2584,
      4181,
      6765,
      10946,
      17711,
      28657,
      46368,
      75025,
      121393,
      196418,
      317811,
      514229,
      832040,
    ];
    const stream = fibonacciSequence();
    const actual = Array(expected.length)
      .fill(0)
      .map(() => stream.next().value);
    assert.deepEqual(actual, expected);
  });
});

import {assert} from 'chai';
import {describe, it} from 'mocha';

// Solution
/// Another: String.prototype.charCodeAt()
/// ex) 'a'.charCodeAt(0) - 96 # => 1
const solve = (str: string): number => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const sizes = str.split(/[aeiou]/).map(strChunk =>
    strChunk
      .split('')
      .map(char => alphabet.indexOf(char) + 1)
      .reduce((num, sum) => num + sum, 0)
  );

  return Math.max(...sizes);
};

// Sample Test
describe('solve', () => {
  it("Testing for 'zodiac', expecting: 26", () =>
    assert.strictEqual(solve('zodiac'), 26));
  it("Testing for 'chruschtschov', expecting: 80", () =>
    assert.strictEqual(solve('chruschtschov'), 80));
  it("Testing for 'khrushchev', expecting: 38", () =>
    assert.strictEqual(solve('khrushchev'), 38));
  it("Testing for 'strength', expecting: 57", () =>
    assert.strictEqual(solve('strength'), 57));
  it("Testing for 'catchphrase', expecting: 73", () =>
    assert.strictEqual(solve('catchphrase'), 73));
  it("Testing for 'twelfthstreet', expecting: 103", () =>
    assert.strictEqual(solve('twelfthstreet'), 103));
  it("Testing for 'mischtschenkoana', expecting: 80", () =>
    assert.strictEqual(solve('mischtschenkoana'), 80));
});

import {assert} from 'chai';
import {describe, it} from 'mocha';

// Solution
// Another Solution:
// 1) str.endsWith(ending);
// 2) !ending.length || str.slice(-ending.length) === ending;
const solution = (str: string, ending: string): boolean => {
  const regexp = new RegExp(
    ending.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') + '$'
  );
  return str.match(regexp) !== null ? true : false;
};

// Sample Test
describe('Sample Test Cases', () => {
  it('Should return true or false', () => {
    assert.equal(solution('abcde', 'cde'), true);
    assert.equal(solution('abcde', 'abc'), false);
    assert.equal(solution('abc', ''), true);
    assert.equal(solution('aaa', ':-('), false);
  });
});

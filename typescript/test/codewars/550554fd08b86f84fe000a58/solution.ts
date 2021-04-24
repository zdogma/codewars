import {assert} from 'chai';
import {describe, it} from 'mocha';

// Solution
// Another: Array.prototype.some()
// cf) Array.prototype.every()
const inArray = (a1: string[], a2: string[]): string[] => {
  const a2Str = a2.join('_');

  return a1
    .filter(str => {
      const regexp = new RegExp(str, 'i');
      return regexp.test(a2Str);
    })
    .sort();
};

// Sample Test
function testing(a1: string[], a2: string[], expected: string[]) {
  assert.deepEqual(inArray(a1, a2), expected);
}
describe('Fixed Tests inArray', () => {
  it('Basic tests', () => {
    const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
    let a1 = ['arp', 'live', 'strong'];
    testing(a1, a2, ['arp', 'live', 'strong']);
    a1 = ['xyz', 'live', 'strong'];
    testing(a1, a2, ['live', 'strong']);
    a1 = ['live', 'strong', 'arp'];
    testing(a1, a2, ['arp', 'live', 'strong']);
  });
});

import {assert} from 'chai';
import {describe, it} from 'mocha';

// Solution
// Another:
//   const hh = Math.floor(seconds / 3600);
//   const mm = Math.floor(seconds / 60) % 60;
//   const ss = seconds % 60;
type TimeUnit = {
  Hour: string;
  Minute: string;
  Second: string;
};

const timeUnit = {
  Hour: 60 * 60,
  Minute: 60,
  Second: 1,
};

const divide = (divisor: number, dividend: number): [number, number] => {
  const division = Math.floor(dividend / divisor);
  const remainder = dividend - divisor * division;

  return [division, remainder];
};

const humanReadable = (seconds: number): string => {
  let restSeconds = seconds;
  const divisions = (Object.keys(timeUnit) as (keyof TimeUnit)[]).map(
    unitName => {
      const [division, remainder] = divide(timeUnit[unitName], restSeconds);
      restSeconds = remainder;
      return `0${division}`.slice(-2);
    }
  );

  return divisions.join(':');
};

// Sample Test
describe('humanReadable', () => {
  it('should format correctly', () => {
    assert.equal(humanReadable(0), '00:00:00', 'humanReadable(0)');
    assert.equal(humanReadable(5), '00:00:05', 'humanReadable(5)');
    assert.equal(humanReadable(60), '00:01:00', 'humanReadable(60)');
    assert.equal(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
    assert.equal(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
  });
});

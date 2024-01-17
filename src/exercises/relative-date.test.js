import {dateDistance} from './relative-date';
import { expect } from '@open-wc/testing';

describe('Calculate Relative Date', () => {
  it('Today', () => {
    const input  = '2024-01-17';
    const expected = 'Today';
    const actual = dateDistance(input);
    expect(actual).to.equal(expected);
  });
  it('Yesterday', () => {
    const input  = '2024-01-16';
    const expected = 'Yesterday';
    const actual = dateDistance(input);
    expect(actual).to.equal(expected);
  })
  it('This Week', () => {
    const input  = '2024-01-15';
    const expected = 'This week';
    const actual = dateDistance(input);
    expect(actual).to.equal(expected);
  });
  it('Last Week', () => {
    const input  = '2024-01-10';
    const expected = 'Last week';
    const actual = dateDistance(input);
    expect(actual).to.equal(expected);
  });
  it('This Month', () => {
    const input  = '2024-01-05';
    const expected = 'This month';
    const actual = dateDistance(input);
    expect(actual).to.equal(expected);
  });
});






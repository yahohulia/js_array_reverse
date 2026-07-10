'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['test']);

    expect(Array.isArray(result)).toBe(true);
  });

  it(`should reverse a single word`, () => {
    expect(arrayReverse(['Hello'])).toEqual(['olleH']);
  });

  it(`should reverse multiple words preserving their original lengths`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should handle a sentence with single letters and punctuation`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual([
      '!',
      'tn',
      'e',
      'dutsamaI',
    ]);
  });

  it(`should return an empty array if the original array is empty`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should handle an array that consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should correctly handle a mix of empty and non-empty strings`, () => {
    expect(arrayReverse(['a', '', 'bc', ''])).toEqual(['c', '', 'ba', '']);
  });

  it(`should mutate the original array (in-place modification)`, () => {
    const original = ['abc', 'def'];
    const result = arrayReverse(original);

    expect(result).toBe(original);
  });
});

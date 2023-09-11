const leftJoin = require('./hashmapLeft');

describe('leftJoin', () => {
  it('should perform a left join on two hashmaps', () => {
    const hashMap1 = {
      diligent: 'employed',
      fond: 'enamored',
      guide: 'usher',
      outfit: 'garb',
      wrath: 'anger',
    };

    const hashMap2 = {
      diligent: 'idle',
      fond: 'averse',
      guide: 'follow',
      flow: 'jam',
      wrath: 'delight',
    };

    const expectedResult = [
      ['diligent', 'employed', 'idle'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['outfit', 'garb', null],
      ['wrath', 'anger', 'delight']
    ];

    expect(leftJoin(hashMap1, hashMap2)).toEqual(expectedResult);
  });

  it('should handle empty hashmap2', () => {
    const hashMap1 = {
      dog: 'animal',
      cat: 'animal',
      bird: 'animal',
    };

    const hashMap2 = {};

    const expectedResult = [
      ['dog', 'animal', null],
      ['cat', 'animal', null],
      ['bird', 'animal', null]
    ];

    expect(leftJoin(hashMap1, hashMap2)).toEqual(expectedResult);
  });

  it('should handle non-matching keys in hashmap2', () => {
    const hashMap1 = {
      apple: 'fruit',
      carrot: 'vegetable',
      orange: 'fruit',
    };

    const hashMap2 = {
      apple: 'red',
      carrot: 'orange',
      broccoli: 'green',
    };

    const expectedResult = [
      ['apple', 'fruit', 'red'],
      ['carrot', 'vegetable', 'orange'],
      ['orange', 'fruit', null]
    ];

    expect(leftJoin(hashMap1, hashMap2)).toEqual(expectedResult);
  });
});

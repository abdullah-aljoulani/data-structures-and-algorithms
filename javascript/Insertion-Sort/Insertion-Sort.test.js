const insertionSort = require('./Insertion-Sort');

describe('insertionSort', () => {
  it('should correctly sort an array of numbers in ascending order', () => {
    const input = [5, 3, 8, 1, 2];
    const sorted = insertionSort(input);
    expect(sorted).toEqual([1, 2, 3, 5, 8]);
  });

  it('should correctly sort an array of strings in ascending order', () => {
    const input = ['apple', 'banana', 'pear', 'grape'];
    const sorted = insertionSort(input);
    expect(sorted).toEqual(['apple', 'banana', 'grape', 'pear']);
  });

  it('should correctly sort an array with duplicate values', () => {
    const input = [7, 3, 5, 3, 2, 7, 5];
    const sorted = insertionSort(input);
    expect(sorted).toEqual([2, 3, 3, 5, 5, 7, 7]);
  });

  it('should correctly sort an already sorted array', () => {
    const input = [1, 2, 3, 4, 5];
    const sorted = insertionSort(input);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  it('should correctly sort an empty array', () => {
    const input = [];
    const sorted = insertionSort(input);
    expect(sorted).toEqual([]);
  });
});

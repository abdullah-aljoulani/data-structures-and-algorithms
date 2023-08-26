'use strict';

const { sortByMostRecentYear, sortAlphabeticallyByTitle } = require('./Comparisons'); // Update the path

describe('Sorting Functions', () => {
  const movies = [
    { title: 'The Matrix', year: 1999, genres: ['Action', 'Sci-Fi'] },
    { title: 'An Inception', year: 2010, genres: ['Action', 'Sci-Fi'] },
  ];

  it('should sort movies by most recent year first', () => {
    const sortedByYear = sortByMostRecentYear([...movies]);
    const years = sortedByYear.map(movie => movie.year);
    expect(years).toEqual([2010, 1999]);
  });

  it('should sort movies alphabetically by title ignoring "A", "An", "The"', () => {
    const sortedByTitle = sortAlphabeticallyByTitle([...movies]);
    const titles = sortedByTitle.map(movie => movie.title);
    console.log('Sorted Titles:', titles);
    expect(titles).toEqual(['The Matrix', 'An Inception']);
  });
});

'use strict';

function sortByMostRecentYear(movies) {
  return movies.sort((a, b) => b.year - a.year);
}

function sortAlphabeticallyByTitle(movies) {
  const ignoreWords = ['A', 'An', 'The'];

  const compareTitles = (titleA, titleB) => {
    const strippedTitleA = titleA.replace(new RegExp(`^(${ignoreWords.join('|')})\\s+`, 'i'), '');
    const strippedTitleB = titleB.replace(new RegExp(`^(${ignoreWords.join('|')})\\s+`, 'i'), '');

    return strippedTitleA.localeCompare(strippedTitleB);
  };

  return movies.sort((a, b) => compareTitles(a.title, b.title));
}

module.exports = { sortByMostRecentYear, sortAlphabeticallyByTitle };


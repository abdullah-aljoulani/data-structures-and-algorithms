const repeatedWord = require('./index');

describe('repeatedWord', () => {
  it('should return the first repeated word in a string', () => {
    const input1 = 'Once upon a time, there was a brave princess who...';
    const input2 = 'The quick brown fox jumps over the lazy dog.';
    const input3 = 'This sentence has a repeated word. This sentence has a repeated word.';
    expect(repeatedWord(input1)).toEqual('a');

    expect(repeatedWord(input2)).toEqual('the');

    expect(repeatedWord(input3)).toEqual('this');

  });
});


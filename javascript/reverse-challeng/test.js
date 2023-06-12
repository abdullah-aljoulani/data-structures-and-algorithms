'use strict';

const { reverseArray} = require('./reversArray');


describe('Reverse function test', () => {
  it('handle loop function', () => {
    let ReverseArray = reverseArray([1, 2, 3, 4, 5]);
    expect(ReverseArray).toEqual([5, 4, 3, 2, 1]);
  });

})
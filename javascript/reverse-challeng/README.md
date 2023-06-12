# array-reverse

the challenge is to write a function that will do for loop on array and return it reversed.

## Whiteboard Process

![whiteboard challenge1](./Untitled%20(2).jpg)

## Solution

``` JavaScript

function reverseArray(array){
    const reversedArray = [];
    for(let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
    return reversedArray;
}

```
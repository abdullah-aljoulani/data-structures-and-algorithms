'use strict';

const HashTable = require('./hashtable');

describe('HashTable', () => {
  let myHashTable;

  beforeEach(() => {
    myHashTable = new HashTable(10);
  });

  it('should set a key/value to the hashtable', () => {
    myHashTable.set('key1', 'value1');
    expect(myHashTable.get('key1')).toEqual('value1');
  });

  it('should retrieve the value based on a key', () => {
    myHashTable.set('key1', 'value1');
    const value = myHashTable.get('key1');
    expect(value).toEqual('value1');
  });

  it('should return null for a key that does not exist', () => {
    const value = myHashTable.get('nonExistingKey');
    expect(value).toBeNull();
  });

  it('should return a list of all unique keys', () => {
    myHashTable.set('key1', 'value1');
    myHashTable.set('key2', 'value2');
    myHashTable.set('key3', 'value3');
    const keys = myHashTable.keys();
    const expectedKeys = ['key1', 'key2', 'key3'].sort(); // Sort expected keys
    const receivedKeys = keys.sort(); // Sort received keys
    expect(receivedKeys).toEqual(expectedKeys);
  });


  it('should handle collision within the hashtable', () => {
    // Force a collision by setting keys with the same hash value
    myHashTable.set('key1', 'value1');
    myHashTable.set('key11', 'value11');

    expect(myHashTable.get('key1')).toEqual('value1');
    expect(myHashTable.get('key11')).toEqual('value11');
  });

  it('should retrieve a value from a bucket with collision', () => {
    // Force a collision by setting keys with the same hash value
    myHashTable.set('key1', 'value1');
    myHashTable.set('key11', 'value11');

    const value1 = myHashTable.get('key1');
    const value11 = myHashTable.get('key11');

    expect(value1).toEqual('value1');
    expect(value11).toEqual('value11');
  });

  it('should hash a key to an in-range value', () => {
    const key = 'myKey';
    const hashValue = myHashTable.hash(key);

    expect(hashValue).toBeGreaterThanOrEqual(0);
    expect(hashValue).toBeLessThan(10);
  });
});

'use strict';

const LinkedList = require('../classes/LinkedList');

describe('empty linked list', () => {
  it('Creating a Linked List', () => {
    const createlist = new LinkedList();
    expect(createlist.head).toBeNull();
  });

  it(' insert into the linked list', () => {
    const createlist = new LinkedList();
    createlist.append('Abdullah')
    expect(createlist.head.value).toEqual('Abdullah');

    createlist.append('mohanad')
    expect(createlist.head.next.value).toEqual('mohanad');

    createlist.append('mosa')
    expect(createlist.head.next.next.value).toEqual('mosa');
  })
  it('return true when finding a value',()=>{
    const exiest = new LinkedList();
    exiest.append(10);
    exiest.append(20);
    exiest.append(30);
    expect(exiest.contains(10)).toEqual(true)
    expect(exiest.contains(5)).toEqual(false)

  })
  it('return true when finding a value',()=>{
    const exiest = new LinkedList();
    exiest.append(10);
    exiest.append(20);
    exiest.append(30);
    expect(exiest.getValues()).toEqual('{ 10 } -> { 20 } -> { 30 } -> NULL')

  })

})
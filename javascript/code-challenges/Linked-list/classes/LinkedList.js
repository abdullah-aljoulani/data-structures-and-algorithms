'use strict'

const Node = require('./node');
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    const node = new Node(val)
    if(!this.head) {
    this.head = node;
    return this;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;

  }
  contains(val) {
      let currentNode = this.head;
      while (currentNode) {
          if (currentNode.value === val) {
              return true;
          }
          currentNode = currentNode.next;
      }
      return false;
  }
  getValues() {
      const values = [];
      let currentNode = this.head;
      while (currentNode) {
          values.push(`{ ${currentNode.value} }`);
          currentNode = currentNode.next;
      }
      values.push("NULL"); 
      return values.join(" -> ");
  }
}


const newList = new LinkedList();

newList.append(15)
newList.append(10)
newList.append(5)

const values = newList.getValues();
console.log(values);

module.exports = LinkedList
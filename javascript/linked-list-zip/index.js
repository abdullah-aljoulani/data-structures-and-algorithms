class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  }
  
  function zipLists(list1, list2) {
    const result = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;
  
    while (current1 || current2) {
      if (current1) {
        result.append(current1.value);
        current1 = current1.next;
      }
      if (current2) {
        result.append(current2.value);
        current2 = current2.next;
      }
    }
  
    return result;
  }
  
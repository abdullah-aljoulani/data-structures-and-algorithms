'use strict';
const Node = require('./Node');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let arr = [];
    const traversal = (node) => {
      arr.push(node.value);
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
    };

    traversal(this.root);
    return arr;
  }

  postOrder() {
    let arr = [];
    const traversal = (node) => {
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
      arr.push(node.value);
    };

    traversal(this.root);
    return arr;
  }

  inOrder() {
    let arr = [];
    const traversal = (node) => {
      if (node.left) traversal(node.left);
      arr.push(node.value);
      if (node.right) traversal(node.right);
    };

    traversal(this.root);
    return arr;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(root) {
    super(root);
  }

  add(value) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(value);
      return;
    } else {
      const adding = function (node) {
        if (value < node.value) {
          if (node.left === null) {
            node.left = new Node(value);
          } else if (node.left !== null) {
            return adding(node.left);
          }
        } else if (value > node.value) {
          if (node.right === null) {
            node.right = new Node(value);
          } else if (node.right !== null) {
            return adding(node.right);
          }
        } else {
          return null;
        }
      };
      return adding(node);
    }
  }
  contains(value){
    let current = this.root;
    while(current){
      if ( current.value === value){
        return true ;

      }
      if( value < current.value){
        current = current.left;
      }else{
        current=current.right;
      }
    }
    return false ;
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
// eslint-disable-next-line eol-last
};
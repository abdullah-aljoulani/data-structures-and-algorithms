const { Node, BinaryTree, BinarySearchTree } = require('../BinaryTree');

describe('Binary Tree and Binary Search Tree', () => {
  test('Can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });
  test('Can successfully instantiate a tree with a single root node', () => {
    const root = new Node(7);
    const tree = new BinaryTree(root);
    expect(tree.root).toEqual(root);
  });
  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    const BST = new BinarySearchTree(new Node(7));
    BST.add(3);
    BST.add(8);
    expect(BST.root.left.value).toBe(3);
    expect(BST.root.right.value).toBe(8);
  });

  test('Can successfully return a collection from a pre-order,postOrder,inOrder traversal', () => {
    const BST = new BinarySearchTree(new Node(5));
    BST.add(3);
    BST.add(7);
    BST.add(2);
    BST.add(4);
    expect(BST.preOrder()).toEqual([5, 3, 2, 4, 7]);
    expect(BST.postOrder()).toEqual([2, 4, 3, 7, 5]);
    expect(BST.inOrder()).toEqual([2, 3, 4, 5, 7]);
  });
  test('Returns true of false for the contains method, given an existing node value', () => {
    const BST = new BinarySearchTree(new Node(5));
    BST.add(3);
    BST.add(7);
    expect(BST.contains(3)).toBe(true);
    expect(BST.contains(10)).toBe(false);

  });
});

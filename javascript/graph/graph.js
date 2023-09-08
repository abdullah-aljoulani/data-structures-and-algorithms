'use strict';

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(value) {
    if (!this.adjacencyList.has(value)) {
      this.adjacencyList.set(value, []);
    }
    return value;
  }

  addEdge(node1, node2, weight = 0) {
    if (!this.adjacencyList.has(node1) || !this.adjacencyList.has(node2)) {
      throw new Error('Both nodes should already be in the graph');
    }

    const neighbors1 = this.adjacencyList.get(node1);
    const neighbors2 = this.adjacencyList.get(node2);

    neighbors1.push({ node: node2, weight });
    neighbors2.push({ node: node1, weight });
  }

  getNodes() {
    return Array.from(this.adjacencyList.keys());
  }

  getNeighbors(node) {
    if (!this.adjacencyList.has(node)) {
      throw new Error('Node does not exist in the graph');
    }

    return this.adjacencyList.get(node);
  }

  size() {
    return this.adjacencyList.size;
  }
}

module.exports = Graph;

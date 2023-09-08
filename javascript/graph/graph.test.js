const Graph = require('./graph');

describe('Graph', () => {
  test('Node can be successfully added to the graph', () => {
    const graph = new Graph();

    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');

    expect(graph.getNodes()).toEqual(['A', 'B', 'C']);
  });

  test('An edge can be successfully added to the graph', () => {
    const graph = new Graph();

    graph.addNode('A');
    graph.addNode('B');

    graph.addEdge('A', 'B');

    expect(graph.getNeighbors('A')).toEqual([{ node: 'B', weight: 0 }]);
    expect(graph.getNeighbors('B')).toEqual([{ node: 'A', weight: 0 }]);
  });

  test('A collection of all nodes can be properly retrieved from the graph', () => {
    const graph = new Graph();

    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');

    expect(graph.getNodes()).toEqual(['A', 'B', 'C']);
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    const graph = new Graph();

    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');

    graph.addEdge('A', 'B', 3);
    graph.addEdge('A', 'C', 5);
    graph.addEdge('B', 'D', 2);

    expect(graph.getNeighbors('A')).toEqual([
      { node: 'B', weight: 3 },
      { node: 'C', weight: 5 },
    ]);
    expect(graph.getNeighbors('B')).toEqual([
      { node: 'A', weight: 3 },
      { node: 'D', weight: 2 },
    ]);
    expect(graph.getNeighbors('C')).toEqual([{ node: 'A', weight: 5 }]);
    expect(graph.getNeighbors('D')).toEqual([{ node: 'B', weight: 2 }]);
  });

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    const graph = new Graph();

    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');

    expect(graph.size()).toBe(4);
  });
});

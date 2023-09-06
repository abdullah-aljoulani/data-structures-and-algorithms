'use strict';
function tree_intersection(treeOne, treeTwo) {
  const results = [];
  const map = new Map();
  const bt1 = treeOne.preOrder();
  const bt2 = treeTwo.preOrder();
  for (const item of bt1) {
    map.set(item);
  }
  for (const item of bt2) {
    if (map.has(item)) {
      results.push(item);
    }
  }
  return results;
}
module.exports = tree_intersection;

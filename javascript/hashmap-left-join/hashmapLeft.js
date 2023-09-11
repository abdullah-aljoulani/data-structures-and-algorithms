function leftJoin(hashMap1, hashMap2) {
  let results = [];
  for (let key in hashMap1) {
    let value1 = hashMap1[key];
    let value2 = hashMap2[key] || null;
    results.push([key, value1, value2]);
  }
  return results;
}

module.exports = leftJoin;

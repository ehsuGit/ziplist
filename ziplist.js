const test1 = [1, 2, 3];
const test2 = ['a', 'b', 'c'];

function ziplist(l1, l2) {
  const arr = [];
  for (let i = 0; i < l1.length; i++) {
    arr.push(l1[i]);
    arr.push(l2[i]);
  }
  return arr;
}
function zipListTheSimpleWay(l1, l2) {
  return _.zip(l1, l2);
}

console.log(ziplist(test1, test2));
console.log(zipListTheSimpleWay(test1, test2));

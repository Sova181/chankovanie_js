const func = require('./func_chunk');

console.log(func(['a', 'b', 'c', 'd'], 2));
// [['a', 'b'], ['c', 'd']]
console.log(func(['a', 'b', 'c', 'd'], 3));
// [['a', 'b', 'c'], ['d']]
console.log(func([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); 
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
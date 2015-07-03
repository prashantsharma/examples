var _ = require('lodash');

var arr = [5, 10, 15, 20];
var evens = _.pullAt(arr, 1, 3);

console.log(arr);
console.log(evens);

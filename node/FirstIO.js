var fs = require('fs');


var data = fs.readFileSync('example.txt');
console.log(data.toString());



let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(Number(input) - 543);

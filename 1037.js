const fs = require('fs');
let [, numbers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

numbers = numbers.split(' ').map(Number);

console.log(Math.min(...numbers) * Math.max(...numbers));

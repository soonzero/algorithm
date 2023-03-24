let fs = require('fs');
let [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(A * B);

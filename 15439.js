const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString().trim();

console.log(N * (N - 1));

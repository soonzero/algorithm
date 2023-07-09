const fs = require('fs');
const [N, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(parseInt(N, B));

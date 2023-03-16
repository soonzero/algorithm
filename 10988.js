let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

console.log([...input].reverse().join('') === input ? 1 : 0);

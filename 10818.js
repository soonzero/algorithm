let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(
	Math.min(...input[1].split(' ').map((n) => +n)),
	Math.max(...input[1].split(' ').map((n) => +n))
);

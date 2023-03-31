const fs = require('fs');
const [...numbers] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

console.log(
	numbers.map((number) => number ** 2).reduce((a, b) => a + b, 0) % 10
);

const fs = require('fs');
const input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('')
	.map(Number);

console.log(input.map((item) => item ** 5).reduce((a, b) => a + b, 0));

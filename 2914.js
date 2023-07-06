const fs = require('fs');
const [A, I] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

console.log(A * I - (A - 1));

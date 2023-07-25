const fs = require('fs');
const [N, M] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

console.log(N === M ? N ** 2 - 1 : N * M - 1);

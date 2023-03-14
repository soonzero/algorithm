let fs = require('fs');
let input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

let result = [1, 1, 2, 2, 2, 8];

for (let i = 0; i < result.length; i++) {
	result[i] -= input[i];
}

console.log(result.join(' '));

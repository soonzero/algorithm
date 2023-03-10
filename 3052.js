let fs = require('fs');
let input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

let result = [];

for (let i = 0; i < 10; i++) {
	result.push(input[i] % 42);
}

console.log([...new Set(result)].length);

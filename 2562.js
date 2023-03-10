let fs = require('fs');
let input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

let maxIdx = 0;

for (let i = 1; i < input.length; i++) {
	if (input[i] > input[maxIdx]) maxIdx = i;
}

console.log(`${input[maxIdx]}\n${maxIdx + 1}`);

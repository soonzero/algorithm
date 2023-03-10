let fs = require('fs');
let input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

let result = Array(30).fill(0);
let answer = [];

for (let i = 0; i < input.length; i++) {
	result[input[i] - 1] = input[i];
}

for (let i = 0; i < result.length; i++) {
	if (result[i] !== i + 1) answer.push(i + 1);
}

console.log(answer.join('\n'));

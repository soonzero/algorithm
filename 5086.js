let fs = require('fs');
let input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((item) => item.split(' ').map(Number));

let order = 0;
let result = [];

while (input[order][0] !== 0 && input[order][1] !== 0) {
	let [a, b] = input[order];

	if (a % b === 0 || b % a === 0) {
		result.push(a < b ? 'factor' : 'multiple');
	} else {
		result.push('neither');
	}

	order++;
}

console.log(result.join('\n'));

let fs = require('fs');
let input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((item) =>
		item
			.split(' ')
			.map(Number)
			.sort((a, b) => a - b)
	);

let index = 0;
let answer = [];

while (true) {
	let [a, b, c] = input[index];
	if (a === 0 && b === 0 && c === 0) break;

	if (a + b <= c) answer.push('Invalid');
	else if (a === b && b === c) answer.push('Equilateral');
	else if (a !== b && b !== c && c !== a) answer.push('Scalene');
	else answer.push('Isosceles');
	index++;
}

console.log(answer.join('\n').trim());

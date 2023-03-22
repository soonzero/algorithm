let fs = require('fs');
let input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

let count = 0;
let answer = [];

function getDivisors(number) {
	let result = [];
	for (i = 1; i < number; i++) {
		if (number % i === 0) {
			result.push(i);
		}
	}
	return result;
}

while (input[count] !== -1) {
	let num = getDivisors(input[count]);
	num.reduce((a, b) => a + b, 0) === input[count]
		? answer.push(`${input[count]} = ${num.join(' + ')}`)
		: answer.push(`${input[count]} is NOT perfect.`);

	count++;
}

console.log(answer.join('\n').trim());

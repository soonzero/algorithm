const fs = require('fs');
const input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((item) => item.split(' ').map(Number));

let i = 0;
const answer = [];

while (input[i][0] !== 0 && input[i][1] !== 0) {
	if (input[i][0] > input[i][1]) answer.push('Yes');
	else answer.push('No');
	i++;
}

console.log(answer.join('\n').trim());

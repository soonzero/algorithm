const fs = require('fs');
const [, ...tests] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const answer = [];

for (let test of tests) {
	if (test === 'P=NP') answer.push('skipped');
	else {
		const [a, b] = test.split('+').map(Number);

		answer.push(a + b);
	}
}

console.log(answer.join('\n').trim());

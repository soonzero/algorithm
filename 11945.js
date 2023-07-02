const fs = require('fs');
const [, ...inputs] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

console.log(
	inputs
		.map((item) => item.split('').reverse().join(''))
		.join('\n')
		.trim()
);

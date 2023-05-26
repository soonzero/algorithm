let fs = require('fs');
let input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('-')
	.map((item) =>
		item
			.split('+')
			.map(Number)
			.reduce((a, b) => a + b, 0)
	);

console.log(input.reduce((a, b) => a - b, input[0]) + input[0]);

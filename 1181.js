let fs = require('fs');
let [, ...strings] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

strings = [...new Set(strings)];

console.log(
	strings
		.sort((a, b) => {
			if (a.length > b.length) return 1;
			else if (a.length < b.length) return -1;
			else return a > b ? 1 : a < b ? -1 : 0;
		})
		.join('\n')
		.trim()
);

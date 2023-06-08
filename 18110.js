const fs = require('fs');
let [n, ...opinions] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

opinions = opinions
	.sort((a, b) => a - b)
	.filter(
		(_, index) =>
			index + 1 > Math.round(n * 0.15) &&
			index + 1 < opinions.length + 1 - Math.round(n * 0.15)
	);

if (n === 0) {
	console.log(0);
	return;
}

console.log(Math.round(opinions.reduce((a, b) => a + b, 0) / opinions.length));

let fs = require('fs');
let [a, b, c] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.sort((a, b) => a - b)
	.map(Number);

if (c < a + b) console.log(a + b + c);
else console.log((a + b) * 2 - 1);

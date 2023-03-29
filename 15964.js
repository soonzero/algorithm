let fs = require('fs');
let [A, B] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

console.log((A + B) * (A - B));

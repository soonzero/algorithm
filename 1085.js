let fs = require('fs');
let [x, y, w, h] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

console.log(Math.min(...[x, y, w - x, h - y]));

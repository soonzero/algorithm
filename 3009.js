let fs = require('fs');
let input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((item) => item.split(' ').map(Number));

let x = [];
let y = [];

for (let i = 0; i < input.length; i++) {
	x.push(input[i][0]);
	y.push(input[i][1]);
}

x.sort((a, b) => a - b);
y.sort((a, b) => a - b);

console.log(x[0] === x[1] ? x[2] : x[0], y[0] === y[1] ? y[2] : y[0]);

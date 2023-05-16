let fs = require('fs');
let [, ...numbers] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

const max = Math.max(...numbers);

let P = Array(max);

P[1] = 1;
P[2] = 1;
P[3] = 1;

for (let i = 4; i <= max; i++) {
	P[i] = P[i - 3] + P[i - 2];
}

numbers.forEach((num) => console.log(P[num]));

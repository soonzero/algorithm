let fs = require('fs');
let [A, B, V] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

let dayCount = 0;
let height = 0;

while (true) {
	dayCount++;
	height += A;
	if (height >= V) break;
	height -= B;
}

console.log(dayCount);

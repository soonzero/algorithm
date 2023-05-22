const fs = require('fs');
const n = +fs.readFileSync('/dev/stdin').toString().trim();

let array = new Array(n + 1).fill(0);

array[1] = 1;

for (let i = 2; i <= n; i++) {
	let min = 4;

	for (let j = 1; j * j <= i; j++) {
		min = Math.min(min, array[i - j * j]);
	}

	array[i] = min + 1;
}

console.log(array[n]);

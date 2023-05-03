const fs = require('fs');
let [input, ...lines] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

lines = lines.map(Number).sort((a, b) => a - b);
let [K, N] = input.split(' ').map(Number);
let [start, end] = [0, lines[K - 1]];

while (start <= end) {
	const mid = Math.floor((start + end) / 2);
	const count = lines
		.map((line) => Math.floor(line / mid))
		.reduce((a, b) => a + b, 0);

	if (count >= N) {
		start = mid + 1;
	} else {
		end = mid - 1;
	}
}

console.log(end);

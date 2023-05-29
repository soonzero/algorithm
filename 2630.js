const fs = require('fs');
let [num, ...inputs] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

inputs = inputs.map((item) => item.split(' ').map(Number));

const count = [0, 0];

function divide(n, x, y) {
	let total = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			total += inputs[y + j][x + i];
		}
	}

	if (total === 0) count[0]++;
	else if (total === n ** 2) count[1]++;
	else {
		n /= 2;
		divide(n, x, y);
		divide(n, x + n, y);
		divide(n, x, y + n);
		divide(n, x + n, y + n);
	}
}

divide(num, 0, 0);
console.log(count.join('\n'));

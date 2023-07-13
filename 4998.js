const fs = require('fs');
const [...tests] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((item) => item.split(' ').map(Number));

for (let test of tests) {
	const [N, B, M] = test;
	let current = N;
	let answer = 0;

	while (true) {
		if (current > M) break;
		current *= 1 + 0.01 * B;
		answer++;
	}

	console.log(answer);
}

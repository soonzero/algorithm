const fs = require('fs');
const [T, ...inputs] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((item) => item.split(' ').map(Number));

let answer = [];

for (let input of inputs) {
	const [M, N, x, y] = input;

	let count = 0;
	let value = -1;

	while (count * M < lcm(M, N)) {
		if ((count * M + x - y) % N === 0) {
			value = count * M + x;
			break;
		}

		count++;
	}

	answer.push(value);
}

function gcd(a, b) {
	return b ? gcd(b, a % b) : a;
}

function lcm(a, b) {
	return (a * b) / gcd(a, b);
}

console.log(answer.join('\n').trim());

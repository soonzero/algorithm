const fs = require('fs');
const [N, ...words] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const answer = [];

for (let i = 0; i < N; i++) {
	const frequency = {};

	for (let char of words[i * 2]) {
		frequency[char] = (frequency[char] || 0) + 1;
	}

	for (let char of words[i * 2 + 1] || '') {
		frequency[char] = (frequency[char] === undefined ? 0 : frequency[char]) - 1;
	}

	answer.push(
		`Case #${i + 1}: ${Object.values(frequency)
			.map((item) => (item < 0 ? Math.abs(item) : item))
			.reduce((a, b) => Math.abs(a) + Math.abs(b), 0)}`
	);
}

console.log(answer.join('\n').trim());

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const set = new Set();
const answer = [];

for (let i = 0; i < N; i++) {
	set.add(input[i + 1]);
}

for (let i = N + 1; i <= N + M; i++) {
	if (set.has(input[i])) answer.push(input[i]);
}

console.log(answer.length);
console.log(answer.sort().join('\n').trim());

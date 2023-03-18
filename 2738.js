let fs = require('fs');
let [[n, m], ...input] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((n) => n.split(' ').map(Number));

let answer = '';

for (let i = 0; i < n; i++) {
	for (let j = 0; j < m; j++) {
		input[i][j] += input[n + i][j];
	}
}

for (let i = 0; i < n; i++) {
	answer += `${input[i].join(' ')}\n`;
}

console.log(answer.trim());

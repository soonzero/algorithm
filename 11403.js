const fs = require('fs');
let [N, ...inputs] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

N = +N;
inputs = inputs.map((item) => item.split(' ').map(Number));
let answer = [];

for (let i = 0; i < N; i++) {
	for (let j = 0; j < N; j++) {
		for (let k = 0; k < N; k++) {
			if (inputs[j][k] === 1) continue;
			if (inputs[j][i] && inputs[i][k]) inputs[j][k] = 1;
		}
	}
}

inputs.forEach((v) => answer.push(v.join(' ')));

console.log(answer.join('\n').trim());

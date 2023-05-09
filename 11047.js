const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [K, N] = input[0].split(' ').map(Number);

let answer = 0;

for (let i = K; i >= 1; i--) {
	if (N >= input[i]) {
		answer += Math.floor(N / +input[i]);
		N -= Math.floor(N / +input[i]) * Number(input[i]);
	}

	if (N === 0) break;
}

console.log(answer);

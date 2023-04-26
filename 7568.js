const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = input.shift();
let body = input.map((item) => item.split(' ').map(Number));

let answer = '';

for (let i = 0; i < N; i++) {
	let count = 0;

	for (let j = 0; j < N; j++) {
		if (i !== j) {
			if (body[i][0] < body[j][0] && body[i][1] < body[j][1]) count++;
		}
	}

	answer += `${count + 1} `;
}

console.log(answer.trim());

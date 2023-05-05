const fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, B] = inputs.shift().split(' ').map(Number);
const land = inputs.map((item) => item.split(' ').map(Number));

const getTime = (height) => {
	let blocks = B;
	let removal = 0;
	let added = 0;

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			const diff = land[i][j] - height;
			if (diff > 0) {
				removal += diff;
				blocks += diff;
			} else if (diff < 0) {
				added += -diff;
				blocks -= -diff;
			}
		}
	}
	if (blocks < 0) return [Infinity, height];
	return [removal * 2 + added, height];
};

let answer = [];

for (let i = 256; i >= 0; i--) {
	answer.push(getTime(i));
}

console.log(
	answer
		.sort((a, b) => {
			return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0];
		})[0]
		.join(' ')
);

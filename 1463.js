let fs = require('fs');
let N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const result = new Array(N + 1).fill(0);

for (let i = 2; i < N + 1; i++) {
	let min = Number.MAX_SAFE_INTEGER;
	min = result[i - 1] + 1;
	if (i % 3 === 0) min = Math.min(min, result[i / 3] + 1);
	if (i % 2 === 0) min = Math.min(min, result[i / 2] + 1);

	result[i] = min;
}

console.log(result[N]);

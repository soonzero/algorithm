let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];

for (let i = 0; i < Number(input[0]); i++) {
	let [n, ...scores] = input[i + 1].split(' ').map(Number);
	let count = 0;
	let average = scores.reduce((a, b) => a + b, 0) / scores.length;
	for (let j = 0; j < n; j++) {
		if (scores[j] > average) count++;
	}
	result.push(`${((count / scores.length) * 100).toFixed(3)}%`);
}

console.log(result.join('\n'));

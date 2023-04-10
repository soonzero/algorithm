let fs = require('fs');
let [T, ...cases] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';

for (let i = 0; i < T; i++) {
	let k = Number(cases.shift());
	let n = Number(cases.shift());

	building = Array.from(Array(k + 1), () => Array(n).fill(0));

	for (let i = 0; i <= k; i++) {
		for (let j = 1; j <= n; j++) {
			if (i === 0) building[0][j] = j;
			else building[i][j] = building[i - 1][j] + building[i][j - 1];
		}
	}
	result += `${building[k][n]}\n`;
}

console.log(result.trim());

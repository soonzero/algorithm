const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input.shift();
const houses = input.map((item) => item.split('').map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

let count = 0;
let villages = [];

function dfs(row, col) {
	if (row >= 0 && row < N && col >= 0 && col < N && houses[row][col] === 1) {
		houses[row][col] = 0;
		count++;

		for (let i = 0; i < 4; i++) {
			dfs(row + dx[i], col + dy[i]);
		}
	}
}

for (let i = 0; i < N; i++) {
	for (let j = 0; j < N; j++) {
		if (houses[i][j] === 1) {
			dfs(i, j);
			villages.push(count);
			count = 0;
		}
	}
}

console.log(villages.length);
console.log(villages.sort((a, b) => a - b).join('\n'));

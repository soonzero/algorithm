const fs = require('fs');
const [[M, N], ...input] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((item) => item.split(' ').map(Number));

const queue = [];
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
let tomatoes = Array.from(Array(N), () => new Array(M).fill(0));

for (let i = 0; i < N; i++) {
	for (let j = 0; j < M; j++) {
		if (input[i][j] === 1) queue.push([i, j]);
		if (input[i][j] === 0) tomatoes[i][j] = -1;
	}
}

let index = 0;

while (queue.length > index) {
	const [x, y] = queue[index++];

	for (let i = 0; i < 4; i++) {
		const [nx, ny] = [x + dx[i], y + dy[i]];

		if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
		if (tomatoes[nx][ny] >= 0) continue;
		tomatoes[nx][ny] = tomatoes[x][y] + 1;

		queue.push([nx, ny]);
	}
}

let answer = 0;

for (let i = 0; i < N; i++) {
	for (let j = 0; j < M; j++) {
		if (tomatoes[i][j] === -1) {
			console.log(-1);
			return;
		}
		answer = Math.max(answer, tomatoes[i][j]);
	}
}

console.log(answer);

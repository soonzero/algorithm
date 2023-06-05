const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
input = input.map((item) => item.split(''));

const visited = Array.from(new Array(N)).map(() => new Array(M).fill(0));

let row = 0;
let col = 0;
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

for (let i = 0; i < N; i++) {
	for (let j = 0; j < M; j++) {
		if (input[i][j] === 'I') {
			row = i;
			col = j;
		}
	}
}

let answer = 0;

function dfs(x, y) {
	visited[x][y] = 1;

	if (input[x][y] === 'P') answer++;

	for (let i = 0; i < 4; i++) {
		let nx = x + dx[i];
		let ny = y + dy[i];

		if (nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[nx][ny]) {
			if (input[nx][ny] !== 'X' && input[nx][ny] !== 'I') dfs(nx, ny);
		}
	}
}

dfs(row, col);

console.log(answer || 'TT');

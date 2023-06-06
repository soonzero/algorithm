const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const map = input.map((item) => item.split('').map(Number));
const visited = Array.from(new Array(N)).map(() => new Array(M).fill(0));

function bfs(row, col) {
	const dx = [-1, 0, 1, 0];
	const dy = [0, -1, 0, 1];
	const queue = [];
	queue.push([row, col]);
	visited[row][col] = 1;

	while (queue.length) {
		const [x, y] = queue.shift();

		for (let i = 0; i < 4; i++) {
			const [nx, ny] = [x + dx[i], y + dy[i]];
			if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

			if (map[nx][ny] && !visited[nx][ny]) {
				visited[nx][ny] = visited[x][y] + 1;
				queue.push([nx, ny]);
			}
		}
	}
}

bfs(0, 0);

console.log(visited[N - 1][M - 1]);

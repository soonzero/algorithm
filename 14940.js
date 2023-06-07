const fs = require('fs');
const graph = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((item) => item.split(' ').map(Number));

const [N, M] = graph.shift();

const goal = [0, 0];
const answer = graph.map((item) => item.map(() => -1));
const visited = graph.map((item) => item.map(() => 0));

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

for (let i = 0; i < N; i++) {
	for (let j = 0; j < M; j++) {
		if (graph[i][j] === 2) {
			goal[0] = i;
			goal[1] = j;
			answer[i][j] = 0;
		} else if (graph[i][j] === 0) answer[i][j] = 0;
	}
}

function bfs([row, col]) {
	const queue = [];
	queue.push([row, col, 0]);
	visited[row][col] = 1;

	while (queue.length) {
		const [x, y, c] = queue.shift();

		for (let i = 0; i < 4; i++) {
			const [nx, ny] = [x + dx[i], y + dy[i]];

			if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

			if (answer[nx][ny] !== 0 && !visited[nx][ny]) {
				answer[nx][ny] = c + 1;
				queue.push([nx, ny, c + 1]);
				visited[nx][ny] = 1;
			}
		}
	}
}

bfs(goal);

console.log(
	answer
		.map((item) => item.join(' '))
		.join('\n')
		.trim()
);

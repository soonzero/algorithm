const fs = require('fs');
let [N, ...lines] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
N = +N;
lines = lines.map((item) => item.split(''));
let visited = Array.from(Array(N), () => Array(N).fill(0));

let rgb = 0;
let rb = 0;

function bfs(row, col) {
	const queue = [[row, col]];

	while (queue.length) {
		const [x, y] = queue.shift();

		for (let i = 0; i < 4; i++) {
			const [nx, ny] = [x + dx[i], y + dy[i]];

			if (
				nx >= 0 &&
				ny >= 0 &&
				nx < N &&
				ny < N &&
				!visited[nx][ny] &&
				lines[x][y] === lines[nx][ny]
			) {
				visited[nx][ny] = 1;
				queue.push([nx, ny]);
			}
		}
	}
}

for (let i = 0; i < N; i++) {
	for (let j = 0; j < N; j++) {
		if (!visited[i][j]) {
			bfs(i, j);
			rgb++;
		}
	}
}

visited = Array.from(Array(N), () => Array(N).fill(0));

for (let i = 0; i < N; i++) {
	for (let j = 0; j < N; j++) {
		if (lines[i][j] === 'G') lines[i][j] = 'R';
	}
}

for (let i = 0; i < N; i++) {
	for (let j = 0; j < N; j++) {
		if (!visited[i][j]) {
			bfs(i, j);
			rb++;
		}
	}
}

console.log(rgb, rb);

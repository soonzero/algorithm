let fs = require('fs');
let [test, ...inputs] = fs.readFileSync('/dev/stdin').toString().split('\n');

inputs = inputs.map((input) => input.split(' ').map(Number));

let visited, graph, M, N, K;

for (let i = 0; i < test; i++) {
	[M, N, K] = inputs.shift();
	graph = Array.from(Array(M), () => new Array(N).fill(0));
	visited = Array.from(Array(M), () => new Array(N).fill(0));
	let answer = 0;

	for (let j = 0; j < K; j++) {
		const [x, y] = inputs.shift();
		graph[x][y] = 1;
	}

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			if (graph[m][n] === 1 && visited[m][n] === 0) {
				DFS(m, n);
				answer++;
			}
		}
	}
	console.log(answer);
}

function DFS(x, y) {
	const xy = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	];

	visited[x][y] = 1;

	for (let i = 0; i < 4; i++) {
		let x_ = x + xy[i][0];
		let y_ = y + xy[i][1];

		if (x_ >= 0 && y_ >= 0 && x_ < M && y_ < N) {
			if (visited[x_][y_] === 0 && graph[x_][y_] === 1) {
				DFS(x_, y_);
			}
		}
	}
}

const fs = require('fs');
let input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((item) => item.split(' ').map(Number));

const [N, M] = input.shift();
const bacon = new Array(N + 1).fill(0);
const graph = [...new Array(N + 1)].map(() => []);

input.forEach(([start, end]) => {
	graph[start].push(end);
	graph[end].push(start);
});

function bfs(start) {
	const visited = new Array(N + 1).fill(false);
	const queue = [[start, 0]];

	while (queue.length) {
		let [node, count] = queue.shift();

		if (!visited[node]) {
			visited[node] = true;
			bacon[start] += count++;
			graph[node].forEach((item) => queue.push([item, count]));
		}
	}
}

for (let i = 0; i < N; i++) {
	bfs(i + 1);
}
bacon.shift();
console.log(bacon.indexOf(Math.min(...bacon)) + 1);

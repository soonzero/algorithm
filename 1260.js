let fs = require('fs');
let input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((item) => item.split(' ').map(Number));

let [N, M, V] = input.shift();
let graph = Array.from(Array(N + 1), () => new Array());

for (let i = 0; i < M; i++) {
	const [from, to] = input[i];

	graph[from].push(to);
	graph[to].push(from);
}

function dfs(start) {
	const stack = [start];
	const visited = Array(N + 1).fill(false);
	const answer = [];

	while (stack.length) {
		const node = stack.pop();
		if (!visited[node]) {
			visited[node] = true;
			answer.push(node);
			stack.push(...graph[node]);
		}
	}

	return answer.join(' ');
}

function bfs(start) {
	const queue = [start];
	const visited = Array(N + 1).fill(false);
	const answer = [];

	while (queue.length) {
		const node = queue.shift();

		if (!visited[node]) {
			visited[node] = true;
			answer.push(node);
			queue.push(...graph[node]);
		}
	}

	return answer.join(' ');
}

graph.forEach((value) => value.sort((a, b) => b - a));
console.log(dfs(V));

graph.forEach((value) => value.sort((a, b) => a - b));
console.log(bfs(V));

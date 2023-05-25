const fs = require('fs');
// let [[N], ...inputs] = fs
let [main, ...inputs] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((item) => item.split(' ').map(Number));

let answer = 0;
let graph = [];
let visited = new Array(N + 1).fill(false);

// for (let input of inputs) {
// 	const [from, to] = input;

// 	graph[from] = Array.isArray(graph[from]) ? [...graph[from], to] : [to];
// 	graph[to] = Array.isArray(graph[to]) ? [...graph[to], from] : [from];
// }

for (let i = 0; i < N; i++) {
	graph[i + 1] = [];
}

for (let input of inputs) {
	const [from, to] = input;

	graph[from].push(to);
	graph[to].push(from);
}

function dfs(start) {
	if (visited[start]) return;
	visited[start] = true;

	for (let i = 0; i < graph[start].length; i++) {
		if (!visited[graph[start][i]]) dfs(graph[start][i]);
	}
}

for (let i = 0; i < N; i++) {
	if (!visited[i + 1]) {
		dfs(i + 1);
		answer++;
	}
}

console.log(answer);

// 주석 처리: 메모리 초과의 이유
// 스프레드 연산자를 사용해서 새로운 배열에 요소를 넣는 로직이다보니
// 지나치게 많은 배열이 생성되어 메모리 초과가 뜨는 것으로 판단함

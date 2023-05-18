const fs = require('fs');
let [numberOfComputers, , ...links] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((item) => (item.includes(' ') ? item.split(' ').map(Number) : +item));

let visited = new Array(numberOfComputers + 1).fill(false);
let graph = visited.slice().map(() => []);

links.map(([i, j]) => {
	graph[i].push(j);
	graph[j].push(i);
});

let answer = 0;

const findLink = (from) => {
	for (let to of graph[from]) {
		if (!visited[to]) {
			visited[to] = true;
			answer++;
			findLink(to);
		}
	}
};

findLink(1);

console.log(answer - 1);

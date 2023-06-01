const fs = require('fs');
let [N, K] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

const visited = new Array(100001).fill(false);
const queue = [[N, 0]];
let answer = 0;

while (queue.length) {
	const [current, time] = queue.shift();

	// if (visited[current]) continue;

	// visited[current] = true;

	if (current === K) {
		answer = time;
		break;
	}

	for (let position of [current * 2, current + 1, current - 1]) {
		// if (position <= 100000 && position >= 0) {
		if (!visited[position] && position <= 100000 && position >= 0) {
			visited[position] = true;
			queue.push([position, time + 1]);
		}
	}
}

console.log(answer);

// 시간 절약을 위해서, 방문했던 곳은 아예 큐에 넣지 않기

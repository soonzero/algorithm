const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N, H] = inputs.shift().split(' ').map(Number);
const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];

const queue = [];
const tomatoes = Array.from(Array(H), () =>
	Array.from(Array(N), () => Array.from(Array(M).fill(0)))
);

for (let i = 0; i < H; i++) {
	for (let j = 0; j < N; j++) {
		tomatoes[i][j] = inputs.shift().split(' ').map(Number);
	}
}

let unripeTomatoesCount = 0;
for (let i = 0; i < H; i++) {
	for (let j = 0; j < N; j++) {
		for (let k = 0; k < M; k++) {
			if (tomatoes[i][j][k] === 0) unripeTomatoesCount++;
			else if (tomatoes[i][j][k] === 1) queue.push([i, j, k, 0]);
		}
	}
}

let index = 0;
let answer = 0;

while (queue.length > index) {
	const [z, x, y, days] = queue[index++];

	for (let i = 0; i < 6; i++) {
		const [nx, ny, nz] = [x + dx[i], y + dy[i], z + dz[i]];

		if (
			nz >= 0 &&
			nz < H &&
			nx >= 0 &&
			nx < N &&
			ny >= 0 &&
			ny < M &&
			!tomatoes[nz][nx][ny]
		) {
			tomatoes[nz][nx][ny] = 1;
			queue.push([nz, nx, ny, days + 1]);
			unripeTomatoesCount--;
		}
	}

	answer = days;
}

console.log(unripeTomatoesCount ? -1 : answer);

const fs = require('fs');
const [size, ...floors] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const [N, M] = size.split(' ').map(Number);

let row = 0;
let col = 0;

floors.forEach((floor) => {
	if (!floor.includes('X')) row++;
});

for (let i = 0; i < M; i++) {
	for (let j = 0; j < N; j++) {
		if (floors[j][i] === 'X') break;
		else if (j === N - 1) {
			col++;
		}
	}
}

console.log(Math.max(row, col));

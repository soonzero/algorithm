const fs = require('fs');
let [N, r, c] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

let answer = 0;

function divide(size, row, col) {
	if (row === r && col === c) {
		console.log(answer);
		return;
	}

	if (r >= row && r < row + size && c >= col && c < col + size) {
		size = Math.floor(size / 2);
		divide(size, row, col);
		divide(size, row, col + size);
		divide(size, row + size, col);
		divide(size, row + size, col + size);
	} else answer += size * size;
}

divide(Math.pow(2, N), 0, 0);

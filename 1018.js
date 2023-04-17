const fs = require('fs');
const [size, ...board] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const lines = ['WBWBWBWB', 'BWBWBWBW'];
let result = [];

for (let i = 0; i <= Number(size.split(' ')[0]) - 8; i++) {
	for (let j = 0; j <= Number(size.split(' ')[1]) - 8; j++) {
		for (let k = 0; k < 2; k++) {
			let count = 0;

			for (let x = 0; x < 8; x++) {
				for (let y = 0; y < 8; y++) {
					if (board[i + x][j + y] !== lines[(x + k) % 2][y]) count++;
				}
			}
			result.push(count);
		}
	}
}

console.log(Math.min(...result));

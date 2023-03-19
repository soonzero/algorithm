let fs = require('fs');
let input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((item) => item.split(' ').map(Number));

let max = 0;
let row = 0;
let col = 0;

for (let i = 0; i < 9; i++) {
	for (let j = 0; j < 9; j++) {
		if (max < input[i][j]) {
			max = input[i][j];
			row = i + 1;
			col = j + 1;
		}
	}
}

if (max === 0) {
	row = 1;
	col = 1;
}

console.log(max);
console.log(row, col);

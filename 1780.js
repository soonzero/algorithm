const fs = require('fs');
let [N, ...papers] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

papers = papers.map((item) => item.split(' ').map(Number));

let answer = [0, 0, 0];

function recursion(n, x, y) {
	let target = papers[y][x];
	let temp = true;

	for (let i = y; i < y + n; i++) {
		for (let j = x; j < x + n; j++) {
			if (papers[i][j] !== target) {
				temp = false;
				break;
			}
		}

		if (!temp) break;
	}

	if (temp) answer[target + 1]++;
	else {
		recursion(n / 3, x, y);
		recursion(n / 3, x + n / 3, y);
		recursion(n / 3, x + (n / 3) * 2, y);
		recursion(n / 3, x, y + n / 3);
		recursion(n / 3, x + n / 3, y + n / 3);
		recursion(n / 3, x + (n / 3) * 2, y + n / 3);
		recursion(n / 3, x, y + (n / 3) * 2);
		recursion(n / 3, x + n / 3, y + (n / 3) * 2);
		recursion(n / 3, x + (n / 3) * 2, y + (n / 3) * 2);
	}
}

recursion(N, 0, 0);

console.log(answer.join('\n'));

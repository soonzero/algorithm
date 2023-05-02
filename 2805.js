let fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const trees = input[1]
	.split(' ')
	.map(Number)
	.sort((a, b) => a - b);

let [first, last] = [0, trees[N - 1]];
let answer = 0;

while (first <= last) {
	let temp = 0;
	const mid = Math.floor((first + last) / 2);

	trees.forEach((tree) => {
		if (mid < tree) temp += tree - mid;
	});

	if (temp >= M) {
		if (answer < mid) answer = mid;
		first = mid + 1;
	} else last = mid - 1;
}

console.log(answer);

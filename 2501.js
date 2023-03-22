let fs = require('fs');
let [N, K] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

if (K === 1) {
	console.log(1);
	return;
}

let result = [];

// for (let i = 1; i <= N; i++) {
// 	if (N % i === 0) result.push(i);
// }

// if (K > result.length) console.log(0);
// else console.log(result[K - 1]);

// 리팩토링

let count = 0;

for (let i = 1; i <= N; i++) {
	if (N % i === 0) count++;
	if (count === K) {
		console.log(i);
		return;
	}
}

console.log(0);

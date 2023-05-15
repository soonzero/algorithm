let fs = require('fs');
let [N, ...scores] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

let stairs = new Array(301);

stairs[0] = scores[0];
stairs[1] = scores[0] + scores[1];
stairs[2] = Math.max(scores[0] + scores[2], scores[1] + scores[2]);

for (let i = 3; i <= N; i++) {
	stairs[i] = Math.max(
		stairs[i - 2] + scores[i],
		stairs[i - 3] + scores[i - 1] + scores[i]
	);
}

console.log(stairs[N - 1]);

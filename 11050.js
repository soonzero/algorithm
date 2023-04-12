let fs = require('fs');
let [N, K] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

function factorial(num) {
	let result = 1;

	for (let i = 0; i < num; i++) {
		result *= i + 1;
	}

	return result;
}

console.log(factorial(N) / (factorial(K) * factorial(N - K)));

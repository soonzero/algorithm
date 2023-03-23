let fs = require('fs');
let [M, N] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

function isPrimeNumber(number) {
	if (number === 1) return false;

	for (let i = 2; i < number; i++) {
		if (number % i === 0) return false;
	}

	return true;
}

let sum = 0;
let min = 0;

for (let i = M; i <= N; i++) {
	if (isPrimeNumber(i)) {
		sum += i;
		if (min === 0) min = i;
	}
}

console.log(sum === 0 ? -1 : `${sum}\n${min}`);

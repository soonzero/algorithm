let fs = require('fs');
let [N, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = 0;

function isPrimeNumber(num) {
	if (num === 1) return false;

	for (let i = 2; i < num; i++) {
		if (num % i === 0) return false;
	}

	return true;
}

let numbers = input.split(' ');

for (let i = 0; i < N; i++) {
	if (isPrimeNumber(Number(numbers[i]))) count++;
}

console.log(count);

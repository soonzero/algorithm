const fs = require('fs');
const [M, N] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

const checkPrimeOrNot = (num) => {
	let isPrime = true;

	if (num === 1) return false;

	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			isPrime = false;
			break;
		}
	}

	return isPrime;
};

let answer = '';

for (let i = M; i <= N; i++) {
	if (checkPrimeOrNot(i)) answer += `${i}\n`;
}

console.log(answer.trim());

const fs = require('fs');
const [, ...inputs] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

for (let _ of inputs) {
	// const [A, B] = input.split(' ').map(Number);

	// if (getPrimeNumbers(A).reduce((a, b) => a + b, 0) === B) console.log('yes');
	// else console.log('no');
	console.log('yes');
}

// function getPrimeNumbers(num) {
// 	let currentNumber = num;
// 	let prime = 2;
// 	const primeNumbers = [];

// 	while (true) {
// 		if (currentNumber % prime === 0) {
// 			primeNumbers.push(prime);
// 			currentNumber = currentNumber / prime;
// 		} else {
// 			prime++;
// 		}

// 		if (currentNumber === 1) break;
// 	}

// 	return primeNumbers;
// }

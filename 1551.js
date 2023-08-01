const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, K] = input.shift().split(' ').map(Number);
let numbers = input.shift().split(',').map(Number);

for (let i = 0; i < K; i++) {
	numbers = transform(numbers);
	N--;
}

function transform(array) {
	const newArray = [];
	for (let i = 0; i < N - 1; i++) {
		newArray.push(array[i + 1] - array[i]);
	}
	return newArray;
}

console.log(numbers.join(','));

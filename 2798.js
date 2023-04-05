let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];

const numbers = input[1].split(' ').map(Number);

for (let i = 0; i < numbers.length; i++) {
	for (let j = i + 1; j < numbers.length; j++) {
		for (let k = j + 1; k < numbers.length; k++) {
			result.push(numbers[i] + numbers[j] + numbers[k]);
		}
	}
}

console.log(
	Math.max(...result.filter((item) => item <= input[0].split(' ')[1]))
);

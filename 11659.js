let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = input[1].split(' ').map(Number);
const array = new Array(numbers.length + 1).fill(0);

numbers.forEach((n, i) => {
	array[i + 1] = array[i] + n;
});

const answer = [];

input.slice(2).forEach((arr) => {
	const [i, j] = arr.split(' ').map(Number);
	answer.push(array[j] - array[i - 1]);
});

console.log(answer.join('\n').trim());

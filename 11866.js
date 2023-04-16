const fs = require('fs');
const input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

let order = -1;
let count = 0;
let answer = [];
let circle = [];

for (let i = 0; i < input[0]; i++) {
	circle.push(i + 1);
}

while (answer.length !== input[0]) {
	order++;
	count++;

	if (count % input[1] === 0) {
		answer.push(circle[order]);
		circle.splice(order, 1);
		order--;
	}

	if (order === circle.length - 1) order = -1;
}

console.log(`<${answer.join(', ')}>`);

const fs = require('fs');
const [, ...numbers] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

let answer = [];

for (let number of numbers) {
	switch (+number) {
		case 0:
			answer.pop();
			break;
		default:
			answer.push(+number);
			break;
	}
}

console.log(answer.reduce((a, b) => a + b, 0));

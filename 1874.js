const fs = require('fs');
let [N, ...cases] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

let answer = '';
let stack = [];
let number = 0;

for (let i = 1; i <= N; i++) {
	stack.push(i);
	answer += '+\n';

	while (stack[stack.length - 1] === cases[number]) {
		stack.pop();
		answer += '-\n';
		number++;

		if (number === N) break;
	}
}

console.log(stack.length === 0 ? answer.trim() : 'NO');

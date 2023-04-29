const fs = require('fs');
const [...sentences] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

let answer = '';

for (let sentence of sentences) {
	if (sentence === '.') break;
	let stack = [];

	for (let i = 0; i < sentence.length; i++) {
		if (sentence[i] === '(') stack.push(0);
		else if (sentence[i] === '[') stack.push(1);
		else if (sentence[i] === ')') {
			if (stack[stack.length - 1] === 0) stack.pop();
			else {
				answer += 'no\n';
				break;
			}
		} else if (sentence[i] === ']') {
			if (stack[stack.length - 1] === 1) {
				stack.pop();
			} else {
				answer += 'no\n';
				break;
			}
		} else if (sentence[i] === '.') {
			if (stack.length === 0) answer += 'yes\n';
			else answer += 'no\n';
		}
	}
}

console.log(answer.trim());

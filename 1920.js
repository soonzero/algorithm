const fs = require('fs');
const [N, scope, M, numbers] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

let answer = [];

for (let i = 0; i < Number(M); i++) {
	let numArray = numbers.split(' ').map(Number);
	let scopeArray = scope.split(' ').map(Number);
	if (scopeArray.includes(numArray[i])) answer.push(1);
	else answer.push(0);
}

console.log(answer.join('\n').trim());

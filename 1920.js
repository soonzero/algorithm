const fs = require('fs');
const [, scope, , numbers] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

// 1차 시도 - 메모리 초과
// let answer = [];

// for (let i = 0; i < Number(M); i++) {
// 	let numArray = numbers.split(' ').map(Number);
// 	let scopeArray = scope.split(' ').map(Number);
// 	if (scopeArray.includes(numArray[i])) answer.push(1);
// 	else answer.push(0);
// }

// console.log(answer.join('\n').trim());

// 배열 말고 set으로 사용하니까 됨

let scopeSet = new Set(scope.split(' '));

console.log(
	numbers
		.split(' ')
		.map((number) => (scopeSet.has(number) ? 1 : 0))
		.join('\n')
);

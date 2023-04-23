let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 메모리 초과
// const frequency = {};
// let answer = '';

// for (let i = 0; i < Number(input[0]); i++) {
// 	frequency[input[1].split(' ')[i]] =
// 		(frequency[input[1].split(' ')[i]] || 0) + 1;
// }

// for (let i = 0; i < Number(input[2]); i++) {
// 	answer += `${frequency[input[3].split(' ')[i]] || 0} `;
// }

// console.log(answer.trim());

// 개수를 확인하는 문제는 맵 자료구조를 이용해서 풀어도 된다고 함

let answer = [];
let cardMap = new Map();

for (let number of input[1].split(' ').map(Number)) {
	cardMap.set(number, cardMap.has(number) ? cardMap.get(number) + 1 : 1);
}

for (let number of input[3].split(' ').map(Number)) {
	answer.push(cardMap.has(number) ? cardMap.get(number) : 0);
}

console.log(answer.join('\n').trim());

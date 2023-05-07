const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const M = +input[0].split(' ')[0];
const array = input.slice(1, M + 1);
const map = new Map(array.map((item, index) => [item, index + 1]));

let answer = '';

for (let question of input.slice(M + 1)) {
	if (Number.isNaN(+question)) answer += `${map.get(question)}\n`;
	else answer += `${array[+question - 1]}\n`;
}

console.log(answer.trim());

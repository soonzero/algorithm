let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let T = Number(input[0]);
let result = '';

for (let i = 0; i < T; i++) {
	let [A, B] = input[i + 1].split(' ');
	result += `Case #${i + 1}: ${Number(A) + Number(B)}\n`;
}

console.log(result);

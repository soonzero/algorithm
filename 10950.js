let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];

for (let i = 1; i <= Number(input[0]); i++) {
	let [A, B] = input[i].split(' ');
	result.push(Number(A) + Number(B));
}

console.log(result.join('\n'));

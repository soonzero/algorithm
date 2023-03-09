let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';

for (let i = 0; i < input.length; i++) {
	let [A, B] = input[i].split(' ').map((n) => +n);
	result += `${A + B}\n`;
}

console.log(result);

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let cases = Number(input[0]);
let result = '';

while (cases > 0) {
	let [A, B] = input[Number(input[0]) - cases + 1].split(' ').map((n) => +n);
	result += `${A + B}\n`;
	cases--;
}

console.log(result);

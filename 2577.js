let fs = require('fs');
let [a, b, c] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

let frequency = {};
let numString = String(a * b * c);
let answer = '';

for (let i = 0; i < numString.length; i++) {
	frequency[numString[i]] = (frequency[numString[i]] || 0) + 1;
}

for (let i = 0; i < 10; i++) {
	answer += `${frequency[i] || 0}\n`;
}

console.log(answer.trim());

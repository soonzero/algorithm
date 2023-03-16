let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString());

let answer = [];

for (let i = 0; i < input; i++) {
	let result = '';
	for (let j = input - 1; j > i; j--) {
		result += ' ';
	}

	for (let k = 0; k < 2 * (i + 1) - 1; k++) {
		result += '*';
	}

	answer.push(result);
}

console.log(
	answer.concat(answer.slice(0, answer.length - 1).reverse()).join('\n')
);

let fs = require('fs');
let N = Number(fs.readFileSync('test.txt').toString().trim());

let result = '';

for (let i = 0; i < N; i++) {
	let stars = '';

	for (let j = 0; j < N; j++) {
		if (j < N - i - 1) stars += ' ';
		else stars += '*';
	}

	result += `${stars}\n`;
}

console.log(result);

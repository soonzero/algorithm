let fs = require('fs');
let N = Number(fs.readFileSync('/dev/stdin').toString().trim());

let result = '';

for (let i = 0; i < N; i++) {
	let stars = '';

	for (let j = 0; j < i + 1; j++) {
		stars += '*';
	}

	result += `${stars}\n`;
}

console.log(result);

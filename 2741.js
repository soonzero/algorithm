const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

let result = '';

for (let i = 0; i < N; i++) {
	result += `${i + 1}\n`;
}

console.log(result.trim());

const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

let result = '';

for (let i = N; i > 0; i--) {
	result += `${i}\n`;
}

console.log(result.trim());

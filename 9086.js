let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';

for (let i = 0; i < Number(input[0]); i++) {
	result += `${input[i + 1][0]}${input[i + 1][input[i + 1].length - 1]}\n`;
}

console.log(result.trim());

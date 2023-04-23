let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const frequency = {};
let answer = '';

for (let i = 0; i < Number(input[0]); i++) {
	frequency[input[1].split(' ')[i]] =
		(frequency[input[1].split(' ')[i]] || 0) + 1;
}

for (let i = 0; i < Number(input[2]); i++) {
	answer += `${frequency[input[3].split(' ')[i]] || 0} `;
}

console.log(answer.trim());

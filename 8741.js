const fs = require('fs');
const k = +fs.readFileSync('/dev/stdin').toString().trim();

let answer = '';

for (let i = 1; i <= k; i++) {
	answer += '1';
}
for (let i = 1; i < k; i++) {
	answer += '0';
}

console.log(answer);

const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString().trim();

let result = 5;
let add = 7;

for (let i = 1; i < N; i++) {
	result += add;
	add += 3;
}

console.log(result % 45678);

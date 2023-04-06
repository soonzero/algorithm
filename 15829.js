let fs = require('fs');
let [L, string] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let sum = 0;

for (let i = 0; i < L; i++) {
	sum += (string[i].charCodeAt() - 96) * 31 ** i;
}

console.log(sum);

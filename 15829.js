let fs = require('fs');
let [L, string] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let sum = 0;
let r = 1;

for (let i = 0; i < L; i++) {
	sum += (string[i].charCodeAt() - 96) * r;
	r *= 31;
	r %= 1234567891;
	sum %= 1234567891;
}

console.log(sum);

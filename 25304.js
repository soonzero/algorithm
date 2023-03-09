let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let sum = 0;

for (let i = 0; i < Number(input[1]); i++) {
	let [a, b] = input[i + 2].split(' ').map((n) => +n);
	sum += a * b;
}

console.log(Number(input[0]) === sum ? 'Yes' : 'No');

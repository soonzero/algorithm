let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = 0;

for (let num of input[1].split(' ').map((n) => +n)) {
	if (num === Number(input[2])) count++;
}

console.log(count);

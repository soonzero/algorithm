let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = 0;

for (let i = 0; i < Number(input[0]); i++) {
	result += Number(input[1][i]);
}

console.log(result);

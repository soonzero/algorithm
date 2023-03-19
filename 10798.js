let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let maxLength = Math.max(...input.map((item) => item.length));
let result = '';

for (let i = 0; i < maxLength; i++) {
	for (let j = 0; j < input.length; j++) {
		if (input[j][i]) result += input[j][i];
	}
}

console.log(result);

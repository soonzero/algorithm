let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';

for (let num of input[1].split(' ')) {
	if (Number(num) < Number(input[0].split(' ')[1])) result += `${num} `;
}

console.log(result);

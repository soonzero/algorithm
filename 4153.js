let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let order = 0;
let result = '';

while (input[order] !== '0 0 0') {
	const [a, b, c] = input[order]
		.split(' ')
		.map(Number)
		.sort((a, b) => a - b);

	if (a ** 2 + b ** 2 === c ** 2) result += 'right\n';
	else result += 'wrong\n';

	order++;
}

console.log(result.trim());

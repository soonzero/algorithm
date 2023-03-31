let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(
	input === '1 2 3 4 5 6 7 8'
		? 'ascending'
		: input === '8 7 6 5 4 3 2 1'
		? 'descending'
		: 'mixed'
);

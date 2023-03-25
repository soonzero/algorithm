let fs = require('fs');
let [a, b, c] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

if (a === 60 && a === b && b === c) console.log('Equilateral');
else if (a + b + c === 180 && a !== b && b !== c && c !== a)
	console.log('Scalene');
else if (a + b + c !== 180) console.log('Error');
else console.log('Isosceles');

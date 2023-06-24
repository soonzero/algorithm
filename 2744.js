const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function isUpperCase(str) {
	return str === str.toUpperCase();
}

console.log(
	input
		.split('')
		.map((str) => (isUpperCase(str) ? str.toLowerCase() : str.toUpperCase()))
		.join('')
);

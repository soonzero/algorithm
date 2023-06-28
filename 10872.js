const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString().trim();

function factorial(number) {
	if (number === 0 || number === 1) return 1;
	else return number * factorial(number - 1);
}

console.log(factorial(N));

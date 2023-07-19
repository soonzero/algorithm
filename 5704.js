const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let input of inputs) {
	if (input === '*') break;

	const frequency = {};

	for (let char of input) {
		if (char === ' ') continue;
		frequency[char] = (frequency[char] || 0) + 1;
	}

	console.log(Object.keys(frequency).length === 26 ? 'Y' : 'N');
}

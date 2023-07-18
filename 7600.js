const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const answer = [];

for (let input of inputs) {
	const frequency = {};

	if (input === '#') break;

	for (let char of input) {
		const lowerChar = char.toLowerCase();

		if (lowerChar.charCodeAt() >= 97 && lowerChar.charCodeAt() <= 122)
			frequency[lowerChar.toLowerCase()] =
				(frequency[lowerChar.toLowerCase()] || 0) + 1;
	}

	answer.push(Object.keys(frequency).length);
}

console.log(answer.join('\n').trim());

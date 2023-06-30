const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let order = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
const answer = [];

while (input[order] !== '#') {
	let count = 0;

	for (let char of input[order]) {
		if (vowels.includes(char.toLowerCase())) count++;
	}
	answer.push(count);

	order++;
}

console.log(answer.join('\n').trim());

const fs = require('fs');
const [, ...inputs] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const answer = [];

function HAL(string) {
	const code = string
		.split('')
		.map((char) => (char !== 'Z' ? char.charCodeAt() + 1 : 65));
	return String.fromCharCode(...code);
}

for (let i = 0; i < inputs.length; i++) {
	answer.push(HAL(inputs[i]));
}

console.log(
	answer
		.map((item, index) => `String #${index + 1}\n${item}`)
		.join('\n\n')
		.trim()
);

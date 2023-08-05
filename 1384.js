const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let order = 1;
const answer = [];

function find(arr) {
	let result = `Group ${order}\n`;

	for (let i = 0; i < arr.length; i++) {
		const reports = arr[i].split(' ');

		for (let j = 0; j < arr.length; j++) {
			if (reports[j] === 'N')
				result += `${
					i - j < 0
						? arr[i + arr.length - j].split(' ')[0]
						: arr[i - j].split(' ')[0]
				} was nasty about ${reports[0]}\n`;
		}
	}

	if (result === `Group ${order}\n`) result += 'Nobody was nasty';
	answer.push(result.trim());
}

while (true) {
	if (input[0] === '0') break;
	else {
		const number = +input.shift();
		find(input.splice(0, number));
		order++;
	}
}

console.log(answer.join('\n\n'));

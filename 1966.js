let fs = require('fs');
let [T, ...cases] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

cases = cases.map((c) => c.split(' ').map(Number));

let answer = '';

for (let i = 0; i < T; i++) {
	let count = 0;
	let documents = cases[2 * i + 1];
	let choice = cases[2 * i][1];

	while (true) {
		const max = Math.max(...documents);
		const first = documents.shift();

		if (first === max) {
			count++;
			if (choice === 0) {
				answer += `${count}\n`;
				break;
			}
		} else {
			documents.push(first);
		}

		if (choice === 0) {
			choice = documents.length - 1;
		} else {
			choice--;
		}
	}
}

console.log(answer.trim());

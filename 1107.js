const fs = require('fs');
let [N, , buttons] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

if (N === '100') return console.log(0);

let brokenBtns = buttons?.split(' ') || [];
let answer = Math.abs(100 - N);

for (let i = 0; i < 1000000; i++) {
	const str = i.toString();
	let isValid = true;

	for (let j = 0; j < str.length; j++) {
		if (brokenBtns?.includes(str[j])) {
			isValid = false;
			break;
		}
	}

	if (isValid) {
		answer = Math.min(answer, Math.abs(i - N) + str.length);
	}
}

console.log(answer);

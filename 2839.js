const fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let answer = 0;

while (true) {
	if (input % 5 === 0) {
		answer += input / 5;
		break;
	}

	input -= 3;
	answer++;

	if (input < 0) {
		answer = -1;
		break;
	}
}

console.log(answer);

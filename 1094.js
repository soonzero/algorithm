const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();

let currentStick = 64;
let result = 0;
let answer = 0;

while (true) {
	if (currentStick < 1) break;
	if (currentStick > input) {
		currentStick /= 2;
		continue;
	} else if (currentStick + result <= input) {
		result += currentStick;
		answer++;
		currentStick /= 2;
		if (result === input) {
			break;
		}
	} else currentStick /= 2;
}

console.log(answer);

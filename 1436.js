let fs = require('fs');
let N = Number(fs.readFileSync('/dev/stdin').toString().trim());

let answer = 665;

while (true) {
	answer++;

	if (answer.toString().includes('666')) {
		N--;
	}

	if (N === 0) {
		break;
	}
}

console.log(answer);
